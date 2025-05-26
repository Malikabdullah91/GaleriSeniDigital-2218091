import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

export default function DetailScreen({route}) {
  const {item} = route.params;

  return (
    <View style={styles.container}>
      <Image source={{uri: item.image}} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: 10,
  },
  title: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
