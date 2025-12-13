import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';
import { useCart } from '../context/CartContext';
import HapticButton from '../components/HapticButton';
import { cafeMenuData } from '../constants/cafeMenu';

const CafeScreen = ({ navigation }) => {
  const { addItem, count } = useCart();
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    // Simulate loading the menu data
    setMenu(cafeMenuData);
  }, []);

  const handleAddToCart = (item) => {
    addItem({
      id: item.id,
      nombre: item.name,
      precio: item.price,
      emoji: item.emoji,
      category: item.category
    });
    Alert.alert(
      'Producto agregado',
      `${item.name} se agregó al carrito`,
      [{ text: 'OK' }]
    );
  };

  const categories = ['Bebidas Calientes', 'Bebidas Frías', 'Comidas', 'Postres'];

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="bg-amber-600 pt-6 pb-8 px-6 rounded-b-3xl mb-4">
          <View className="flex-row items-center justify-between mb-2">
            <Pressable
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                navigation.goBack();
              }}
            >
              <Text className="text-amber-100 text-lg font-montserrat">← Volver</Text>
            </Pressable>
            <Pressable
              onPress={() => {
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                navigation.navigate('Cart');
              }}
              className="bg-white/10 rounded-full p-2 relative"
            >
              <Ionicons name="cart" size={24} color="#fff" />
              {count > 0 && (
                <View className="absolute -top-1 -right-1 bg-red-500 rounded-full w-5 h-5 items-center justify-center">
                  <Text className="text-white text-xs font-poppins-bold">{count}</Text>
                </View>
              )}
            </Pressable>
          </View>
          <Text className="text-white text-3xl font-poppins-bold">☕ Cafetería Nexus</Text>
          <Text className="text-amber-100 text-sm font-montserrat mt-1">
            Disfruta de nuestro menú variado
          </Text>
        </View>

        {/* Banner de ofertas */}
        <View className="mx-6 mt-6 mb-4">
          <View className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-6 shadow-lg">
            <View className="flex-row items-center mb-3">
              <Text className="text-3xl mr-3">🎉</Text>
              <Text className="text-white text-xl font-poppins-bold">
                ¡Oferta Especial!
              </Text>
            </View>
            <Text className="text-amber-100 text-base font-montserrat mb-3">
              2x1 en cafés premium los miércoles
            </Text>
            <View className="bg-white bg-opacity-20 rounded-xl px-4 py-2">
              <Text className="text-white text-sm font-montserrat text-center">
                ⏰ Solo hoy • Válido hasta las 8:00 PM
              </Text>
            </View>
          </View>
        </View>

        {/* Contenido del menú */}
        <View className="px-6 pb-8">
          {categories.map(category => {
            const categoryItems = menu.filter(item => item.category === category);
            if (categoryItems.length === 0) return null;

            return (
              <View key={category} className="mb-8">
                <View className="flex-row items-center mb-4">
                  <Text className="text-xl font-poppins-bold text-gray-800 mr-3">
                    {category}
                  </Text>
                  <View className="flex-1 h-px bg-gray-300"></View>
                </View>

                {categoryItems.map(item => (
                  <View key={item.id} className="bg-white rounded-2xl p-4 mb-4 shadow-md border border-gray-100">
                    <View className="flex-row">
                      {/* Imagen del producto */}
                      <View className="w-20 h-20 bg-amber-50 rounded-xl items-center justify-center mr-4">
                        <Text className="text-3xl">{item.emoji}</Text>
                      </View>

                      {/* Información del producto */}
                      <View className="flex-1">
                        <Text className="text-lg font-poppins-bold text-gray-800 mb-1">
                          {item.name}
                        </Text>
                        <Text className="text-sm font-montserrat text-gray-600 mb-2 leading-5">
                          {item.description}
                        </Text>
                        <View className="flex-row justify-between items-center">
                          <Text className="text-xl font-poppins-bold text-amber-600">
                            ${item.price.toFixed(2)}
                          </Text>
                          <HapticButton
                            title="Agregar al carrito"
                            onPress={() => handleAddToCart(item)}
                            className="bg-amber-600 px-4 py-2"
                            textClassName="text-sm"
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                ))}
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CafeScreen;