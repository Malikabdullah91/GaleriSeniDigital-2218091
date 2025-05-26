import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView} from 'react-native';

export default function DetailScreen({route}) {
  const {item} = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.label}>Seniman:</Text>
      <Text style={styles.text}>{item.artist || 'Tidak diketahui'}</Text>

      <Text style={styles.label}>Kategori:</Text>
      <Text style={styles.text}>{item.category || '-'}</Text>

      <Text style={styles.label}>Deskripsi:</Text>
      <Text style={styles.text}>
        {item.description || 'Tidak ada deskripsi.'}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: '#333',
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 10,
    alignSelf: 'flex-start',
    color: '#555',
  },
  text: {
    fontSize: 16,
    alignSelf: 'flex-start',
    marginBottom: 10,
    color: '#444',
  },
});
