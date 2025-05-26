import React, {useState, useEffect} from 'react';
import {
  View,
  FlatList,
  Button,
  StyleSheet,
  Dimensions,
  TextInput,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import ArtItem from '../components/ArtItem';

const {width} = Dimensions.get('window');
const CARD_WIDTH = (width - 48) / 2;

const artData = [
  {
    id: '1',
    title: 'Digital Sunset',
    image: 'https://images.unsplash.com/photo-1607746882042-944635dfe10e',
  },
  {
    id: '2',
    title: 'Modern Abstract',
    image: 'https://images.unsplash.com/photo-1582582421796-e6c985f3aa26',
  },
  {
    id: '3',
    title: 'Cyber World',
    image:
      'https://osccdn.medcom.id/images/content/2021/12/20/3d5f502bf2abea4c5c25b6ceb6cd8b66.jpg',
  },
  {
    id: '4',
    title: 'Fractal Dreams',
    image:
      'https://i.pinimg.com/736x/40/8f/31/408f318b939e4cea5482360b02e3bb14.jpg',
  },
  {
    id: '5',
    title: 'Neo Metropolis',
    image:
      'https://cdnb.artstation.com/p/assets/images/images/041/137/855/large/guillaume-deschamps-2.jpg',
  },
  {
    id: '6',
    title: 'Color Explosion',
    image: 'https://images.unsplash.com/photo-1558888460-9cbdff8f3edb',
  },
];

export default function HomeScreen({navigation}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(artData);

  useEffect(() => {
    const lowerQuery = searchQuery.toLowerCase();
    const results = artData.filter(item =>
      item.title.toLowerCase().includes(lowerQuery),
    );
    setFilteredData(results);
  }, [searchQuery]);

  return (
    <View style={styles.container}>
      {/* Animasi Judul */}
      <Animatable.Text
        animation="fadeInDown"
        duration={800}
        delay={100}
        style={styles.title}>
        Galeri Seni Digital
      </Animatable.Text>

      {/* Input Pencarian */}
      <TextInput
        placeholder="Cari karya seni..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.searchInput}
        placeholderTextColor="#888"
      />

      {/* Animasi Daftar Karya */}
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

      {/* Tombol Tambah Karya */}
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
