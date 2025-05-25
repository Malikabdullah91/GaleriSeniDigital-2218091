import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const ItemSmall = ({title, artist, image}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.artist}>{artist}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 12,
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    elevation: 3,
    alignItems: 'center',
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
    backgroundColor: '#eee',
  },
  textContainer: {
    marginLeft: 16,
    flexShrink: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#222',
  },
  artist: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});

export default ItemSmall;
