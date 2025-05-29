import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Alert} from 'react-native';
import * as Animatable from 'react-native-animatable';
import {createArtwork} from '../services/api'; // import fungsi POST API
import NotificationHelper from '../utils/NotificationHelper';

const handleSubmit = async () => {
  // Simpan karya ke Firebase atau lokal
  // ...

  NotificationHelper.showNotification(
    'Karya Baru Ditambahkan',
    `Karya "${title}" berhasil disimpan!`,
  );

  navigation.navigate('Home');
};

export default function FormScreen({navigation}) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async () => {
    if (!title || !image) {
      Alert.alert('Error', 'Judul dan URL gambar harus diisi!');
      return;
    }

    try {
      await createArtwork({
        title,
        image,
        artist: 'Anonim', // atau bisa pakai input jika ingin ditambahkan
        description: '',
        category: '',
      });

      Alert.alert('Sukses', 'Karya berhasil ditambahkan!');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Gagal menambah karya:', error);
      Alert.alert('Error', 'Gagal menyimpan karya.');
    }
  };

  return (
    <Animatable.View animation="fadeIn" duration={600} style={styles.container}>
      <Animatable.Text
        animation="bounceInDown"
        delay={100}
        style={styles.header}>
        Tambah Karya Baru
      </Animatable.Text>

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
