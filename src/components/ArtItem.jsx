import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default function ArtItem({title, image, onPress, style}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.card, style]}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
    shadowOffset: {width: 0, height: 3},
  },
  image: {
    width: '100%',
    height: 140,
  },
  text: {
    padding: 10,
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
});
