import "./global.css";
import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native';
import * as Font from 'expo-font';
import { 
  Poppins_400Regular, 
  Poppins_700Bold 
} from '@expo-google-fonts/poppins';
import { 
  Montserrat_400Regular, 
  Montserrat_700Bold 
} from '@expo-google-fonts/montserrat';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadFonts() {
      try {
        await Font.loadAsync({
          Poppins_400Regular,
          Poppins_700Bold,
          Montserrat_400Regular,
          Montserrat_700Bold,
        });
        setFontsLoaded(true);
      } catch (err) {
        console.error('Error loading fonts:', err);
        setError(err.message);
      }
    }

    loadFonts();
  }, []);

  if (error) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <Text className="text-red-500 text-base px-5">Error: {error}</Text>
      </View>
    );
  }

  if (!fontsLoaded) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <ActivityIndicator size="large" color="#1E40AF" />
        <Text className="mt-4 text-base text-gray-600">Cargando fuentes...</Text>
      </View>
    );
  }

  return <AppNavigator />;
}
