import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

export default function ArtItem({title, image, onPress}) {
  return (
    <TouchableOpacity style={styles.item} onPress={onPress}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
  },
  image: {
    width: '100%',
    height: 180,
  },
  title: {
    padding: 10,
    fontSize: 18,
    fontWeight: '600',
  },
});
