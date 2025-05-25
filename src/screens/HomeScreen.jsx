import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import ItemSmall from '../components/ItemSmall';

const artworks = [
  {
    id: '1',
    title: 'Virtual Dreams',
    artist: 'Nadia Rizky',
    image:
      'https://thedali.org/wp-content/uploads/2023/03/2023-Dream-Art-Contest-Alice-Sundstrom.jpg',
  },
  {
    id: '2',
    title: 'Digital Bloom',
    artist: 'Aldo Pranata',
    image:
      'https://thedali.org/wp-content/uploads/2023/03/2023-Dream-Art-Contest-Carlos-Solis.jpg',
  },
  {
    id: '3',
    title: 'Cyber Metaverse',
    artist: 'Dimas Setiawan',
    image:
      'https://thedali.org/wp-content/uploads/2023/03/2023-Dream-Art-Contest-Ashley-Otto.jpg',
  },
];

const HomeScreen = () => {
  const [search, setSearch] = useState('');

  const filteredArtworks = artworks.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <ImageBackground
      source={{
        uri: 'https://images.unsplash.com/photo-1611222116404-1f560733cdd0',
      }}
      style={styles.background}
      blurRadius={2}>
      <View style={styles.overlay}>
        <Text style={styles.header}>Galeri Seni Digital</Text>
        <TextInput
          style={styles.input}
          placeholder="Cari karya seni..."
          placeholderTextColor="#aaa"
          value={search}
          onChangeText={setSearch}
        />
        <FlatList
          data={filteredArtworks}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <ItemSmall
              title={item.title}
              artist={item.artist}
              image={item.image}
            />
          )}
          ListEmptyComponent={
            <Text style={styles.empty}>Tidak ditemukan hasil.</Text>
          }
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.95)',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#111',
  },
  input: {
    backgroundColor: '#f0f0f0',
    borderRadius: 12,
    padding: 10,
    fontSize: 16,
    marginBottom: 20,
    color: '#333',
  },
  empty: {
    textAlign: 'center',
    marginTop: 40,
    color: '#888',
  },
});

export default HomeScreen;
