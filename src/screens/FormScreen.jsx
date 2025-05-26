import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet} from 'react-native';
import * as Animatable from 'react-native-animatable';

export default function FormScreen({navigation}) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = () => {
    // Menyimpan karya dan kembali ke Home (simulasi sementara)
    navigation.navigate('Home', {
      newItem: {
        id: Date.now().toString(),
        title,
        image,
      },
    });
  };

  return (
    // Efek animasi fadeIn saat screen muncul
    <Animatable.View animation="fadeIn" duration={600} style={styles.container}>
      {/* Efek animasi bouncing header */}
      <Animatable.Text
        animation="bounceInDown"
        delay={100}
        style={styles.header}>
        Tambah Karya Baru
      </Animatable.Text>

      {/* Efek animasi saat input muncul */}
      <Animatable.View animation="fadeInUp" delay={200}>
        <TextInput
          placeholder="Judul Karya"
          style={styles.input}
          value={title}
          onChangeText={setTitle}
        />
      </Animatable.View>

      <Animatable.View animation="fadeInUp" delay={300}>
        <TextInput
          placeholder="URL Gambar"
          style={styles.input}
          value={image}
          onChangeText={setImage}
        />
      </Animatable.View>

      <Animatable.View animation="zoomIn" delay={400}>
        <Button title="Simpan" onPress={handleSubmit} />
      </Animatable.View>
    </Animatable.View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9f9f9',
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 22,
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: 'bold',
    color: '#444',
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    backgroundColor: '#fff',
  },
});
