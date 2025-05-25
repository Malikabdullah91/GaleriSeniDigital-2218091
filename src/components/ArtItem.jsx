// src/components/ArtItem.jsx
import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ArtItem = ({title, image}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: image}} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
    backgroundColor: '#fff',
    borderRadius: 12,
    elevation: 3,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 180,
  },
  title: {
    padding: 10,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ArtItem;
