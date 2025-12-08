import React from 'react';
import { View, Text, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';

const LandingScreen = ({ navigation }) => {
  
  const handlePress = (screenName) => {
    // Retroalimentación háptica
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    console.log(`Navegando a: ${screenName}`);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="bg-primary pt-8 pb-12 px-6">
          <Text className="text-white text-4xl font-poppins-bold mb-2">
            Nexus
          </Text>
          <Text className="text-white text-lg font-montserrat">
            Librería • Co-Working • Cafetería
          </Text>
        </View>

        {/* Content */}
        <View className="px-6 py-8">
          <Text className="text-3xl font-poppins-bold text-gray-800 mb-4">
            Bienvenido a tu espacio multifuncional
          </Text>
          <Text className="text-base font-montserrat text-gray-600 mb-6 leading-6">
            Descubre nuestra librería universitaria, trabaja en nuestro espacio 
            de co-working y disfruta de un café mientras estudias o trabajas.
          </Text>

          {/* Botón Libros */}
          <Pressable
            onPress={() => handlePress('Libros')}
            className="bg-blue-50 border-2 border-primary rounded-2xl p-5 mb-4 active:opacity-70"
          >
            <Text className="text-3xl text-center mb-2">📚</Text>
            <Text className="text-lg font-poppins-bold text-gray-800 text-center mb-1">
              Explorar Catálogo
            </Text>
            <Text className="text-xs font-montserrat text-gray-600 text-center">
              Con Retroalimentación Háptica
            </Text>
          </Pressable>

          {/* Botón Co-Working */}
          <Pressable
            onPress={() => handlePress('CoWorking')}
            className="bg-purple-50 border-2 border-secondary rounded-2xl p-5 mb-4 active:opacity-70"
          >
            <Text className="text-3xl text-center mb-2">💼</Text>
            <Text className="text-lg font-poppins-bold text-gray-800 text-center mb-1">
              Reservar Espacio
            </Text>
            <Text className="text-xs font-montserrat text-gray-600 text-center">
              Con Retroalimentación Háptica
            </Text>
          </Pressable>

          {/* Botón Cafetería */}
          <Pressable
            onPress={() => handlePress('Cafe')}
            className="bg-amber-50 border-2 border-accent rounded-2xl p-5 mb-4 active:opacity-70"
          >
            <Text className="text-3xl text-center mb-2">☕</Text>
            <Text className="text-lg font-poppins-bold text-gray-800 text-center mb-1">
              Ver Menú
            </Text>
            <Text className="text-xs font-montserrat text-gray-600 text-center">
              Con Retroalimentación Háptica
            </Text>
          </Pressable>
        </View>

        {/* Footer */}
        <View className="px-6 pb-8">
          <View className="bg-gray-100 rounded-xl p-4">
            <Text className="text-sm font-montserrat text-gray-600 text-center">
              Horario: Lunes a Viernes 8:00 - 22:00
            </Text>
            <Text className="text-sm font-montserrat text-gray-600 text-center mt-1">
              Sábados 10:00 - 20:00
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LandingScreen;
