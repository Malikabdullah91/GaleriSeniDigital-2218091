import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Button,
  StyleSheet,
  Dimensions,
  TextInput,
  ActivityIndicator,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import ArtItem from '../components/ArtItem';
import {getArtworks} from '../services/api';

const {width} = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

export default function HomeScreen({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [artData, setArtData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await getArtworks();
      setArtData(response.data);
      setFilteredData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching artworks:', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const lowerQuery = searchQuery.toLowerCase();
    const results = artData.filter(item =>
      item.title.toLowerCase().includes(lowerQuery),
    );
    setFilteredData(results);
  }, [searchQuery, artData]);

  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="fadeInDown"
        duration={800}
        delay={100}
        style={styles.title}>
        Galeri Seni Digital
      </Animatable.Text>

      <TextInput
        placeholder="Cari karya seni..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchInput}
        placeholderTextColor="#888"
      />

      {loading ? (
        <ActivityIndicator size="large" color="#000" style={{marginTop: 40}} />
      ) : (
        <Animatable.View
          animation="fadeInUp"
          delay={300}
          duration={1000}
          style={{flex: 1}}>
          <FlatList
            data={filteredData}
            keyExtractor={item => item.id}
            numColumns={2}
            renderItem={({item}) => (
              <ArtItem
                title={item.title}
                image={item.image}
                onPress={() => navigation.navigate('Detail', {item})}
                style={{width: CARD_WIDTH}}
              />
            )}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginBottom: 16,
            }}
            contentContainerStyle={{paddingBottom: 16}}
            ListEmptyComponent={
              <Animatable.Text
                animation="fadeIn"
                duration={500}
                style={styles.notFoundText}>
                Tidak ada karya ditemukan.
              </Animatable.Text>
            }
          />
        </Animatable.View>
      )}

      <Animatable.View animation="bounceIn" delay={600}>
        <Button
          title="Tambah Karya"
          onPress={() => navigation.navigate('Form')}
          color="#841584"
        />
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fdfdfd',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    textAlign: 'center',
    marginBottom: 12,
    color: '#222',
  },
  searchInput: {
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 16,
    fontSize: 16,
    color: '#333',
  },
  notFoundText: {
    textAlign: 'center',
    fontSize: 16,
    color: '#999',
    marginTop: 20,
  },
});
