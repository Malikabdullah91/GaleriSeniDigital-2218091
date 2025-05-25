// src/screens/HomeScreen.jsx
import React, {useState} from 'react';
import {View, Text, TextInput, FlatList, StyleSheet} from 'react-native';
import ArtItem from '../components/ArtItem';

const sampleArt = [
  {
    id: '1',
    title: 'Virtual Dreams',
    image:
      'https://thedali.org/wp-content/uploads/2023/03/2023-Dream-Art-Contest-Alice-Sundstrom.jpg',
  },
  {
    id: '2',
    title: 'Digital Blomm',
    image:
      'https://thedali.org/wp-content/uploads/2023/03/2023-Dream-Art-Contest-Carlos-Solis.jpg',
  },
  {
    id: '3',
    title: 'Cyber Metaverse',
    image:
      'https://osccdn.medcom.id/images/content/2021/12/20/3d5f502bf2abea4c5c25b6ceb6cd8b66.jpg',
  },
];

const HomeScreen = () => {
  const [search, setSearch] = useState('');

  const filteredArt = sampleArt.filter(art =>
    art.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Galeri Seni Digital</Text>
      <TextInput
        style={styles.input}
        placeholder="Cari karya seni..."
        value={search}
        onChangeText={setSearch}
      />
      <FlatList
        data={filteredArt}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <ArtItem title={item.title} image={item.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {padding: 16, flex: 1, backgroundColor: '#f2f2f2'},
  header: {fontSize: 24, fontWeight: 'bold', marginBottom: 16},
  input: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    marginBottom: 16,
  },
});

export default HomeScreen;
