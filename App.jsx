import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import FormTambah from './src/screens/FormTambah'; // Tambahan

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Galeri'}}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          options={{title: 'Detail Karya'}}
        />
        <Stack.Screen
          name="FormTambah"
          component={FormTambah}
          options={{title: 'Tambah Karya'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
