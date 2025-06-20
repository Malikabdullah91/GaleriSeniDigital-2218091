import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './src/screens/HomeScreen';
import DetailScreen from './src/screens/DetailScreen';
import FormScreen from './src/screens/FormTambah';
import React, {useEffect} from 'react';
import AppNavigator from './src/AppNavigator';
import NotificationHelper from './src/utils/NotificationHelper';

const Stack = createStackNavigator();

export default function App() {
  useEffect(() => {
    NotificationHelper.configure();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="Form" component={FormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
