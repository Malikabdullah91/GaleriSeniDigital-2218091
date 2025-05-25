import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function DetailScreen({route}) {
  const {artwork} = route.params;

  return (
    <View style={styles.container}>
      <Image source={{uri: artwork.image}} style={styles.image} />
      <Text style={styles.title}>{artwork.title}</Text>
      <Text style={styles.description}>{artwork.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, backgroundColor: '#fff'},
  image: {width: '100%', height: 300, borderRadius: 10, marginBottom: 20},
  title: {fontSize: 24, fontWeight: 'bold', marginBottom: 10},
  description: {fontSize: 16, color: '#444'},
});
