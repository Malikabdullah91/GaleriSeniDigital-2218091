import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Text, Alert} from 'react-native';

export default function FormTambah({navigation}) {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (!title || !image || !description) {
      Alert.alert('Semua field wajib diisi!');
      return;
    }
    Alert.alert('Berhasil!', 'Karya berhasil ditambahkan (simulasi)');
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Judul Karya:</Text>
      <TextInput
        style={styles.input}
        placeholder="Judul karya seni"
        value={title}
        onChangeText={setTitle}
      />
      <Text style={styles.label}>URL Gambar:</Text>
      <TextInput
        style={styles.input}
        placeholder="https://..."
        value={image}
        onChangeText={setImage}
      />
      <Text style={styles.label}>Deskripsi:</Text>
      <TextInput
        style={[styles.input, {height: 80}]}
        placeholder="Deskripsi karya"
        multiline
        value={description}
        onChangeText={setDescription}
      />
      <Button title="Simpan" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20},
  label: {marginTop: 10, fontWeight: 'bold'},
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 8,
    padding: 10,
    marginTop: 4,
  },
});
