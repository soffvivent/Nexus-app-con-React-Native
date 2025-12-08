import React, { useState, useCallback } from 'react';
import { View, Text, ScrollView, TextInput, FlatList, Pressable, ActivityIndicator, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as Haptics from 'expo-haptics';
import { Ionicons } from '@expo/vector-icons';
import { useApi } from '../hooks/useApi';
import { fetchBooks } from '../services/api';
import { useCart } from '../context/CartContext';

const CatalogScreen = ({ navigation }) => {
  const { data: books, loading, error, refetch } = useApi(fetchBooks, []);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { count } = useCart();

  const filteredBooks = books?.filter((book) => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    
    const searchMatch = !searchTerm || 
      (book.titulo?.toLowerCase().includes(lowerCaseSearchTerm) || 
       book.autor?.toLowerCase().includes(lowerCaseSearchTerm));

    const categoryMatch = selectedCategory === 'all' || 
      (book.categoria && book.categoria.toLowerCase() === selectedCategory.toLowerCase());

    return searchMatch && categoryMatch;
  }) || [];

  const categories = books ? [...new Set(books.map(book => book.categoria).filter(c => c))] : [];

  const handleBookPress = useCallback((bookId) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    navigation.navigate('BookDetails', { id: bookId });
  }, [navigation]);

  const renderBook = ({ item }) => (
    <Pressable
      onPress={() => handleBookPress(item.id)}
      className="flex-1 bg-white rounded-2xl overflow-hidden shadow-lg shadow-black/10 border border-gray-100 m-2"
    >
      <Image
        source={item.imagen ? { uri: item.imagen } : null}
        className="w-full aspect-[3/4] bg-gray-200"
        resizeMode="cover"
      />
      <View className="p-3 space-y-1">
        <Text className="text-base font-poppins-bold text-gray-900" numberOfLines={2}>
          {item.titulo || 'Título Desconocido'}
        </Text>
        <Text className="text-xs font-montserrat text-gray-600" numberOfLines={1}>
          Autor: {item.autor || 'Desconocido'}
        </Text>
        <Text className="text-sm font-poppins-bold text-green-600">
          ${item.precio || 'N/A'}
        </Text>
      </View>
    </Pressable>
  );

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1" stickyHeaderIndices={[0]}>
        <View className="bg-white border-b border-gray-100 shadow-sm shadow-black/5">
          <View className="bg-blue-700 pt-8 pb-10 px-6 rounded-b-3xl">
            <View className="flex-row items-start justify-between mb-2">
              <View className="flex-1">
                <Text className="text-white text-3xl font-poppins-bold mb-2">
                  📚 Catálogo
                </Text>
                <View className="self-start bg-white/15 px-3 py-1 rounded-full">
                  <Text className="text-blue-50 text-xs font-montserrat">
                    {filteredBooks.length} resultado{filteredBooks.length !== 1 ? 's' : ''}
                  </Text>
                </View>
              </View>
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
          </View>

          <View className="px-6 py-4 space-y-3">
            <TextInput
              placeholder="Buscar por título o autor..."
              value={searchTerm}
              onChangeText={setSearchTerm}
              className="bg-white border border-gray-200 rounded-2xl px-4 py-3 font-montserrat text-gray-900 shadow-sm shadow-black/5"
              placeholderTextColor="#9ca3af"
            />

            <ScrollView 
              horizontal 
              showsHorizontalScrollIndicator={false}
              className="space-x-2"
            >
              <Pressable
                onPress={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-full border ${
                  selectedCategory === 'all' 
                    ? 'bg-blue-700 border-blue-700' 
                    : 'bg-white border-gray-200'
                } shadow-sm shadow-black/5`}
              >
                <Text className={`font-montserrat text-sm ${
                  selectedCategory === 'all' 
                    ? 'text-white' 
                    : 'text-gray-700'
                }`}>
                  Todas
                </Text>
              </Pressable>

              {categories.map(category => (
                <Pressable
                  key={category}
                  onPress={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full border ${
                    selectedCategory === category 
                      ? 'bg-blue-700 border-blue-700' 
                      : 'bg-white border-gray-200'
                  } shadow-sm shadow-black/5`}
                >
                  <Text className={`font-montserrat text-sm ${
                    selectedCategory === category 
                      ? 'text-white' 
                      : 'text-gray-700'
                  }`}>
                    {category}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        </View>

        <View className="px-2 py-4">
          {loading && (
            <View className="items-center justify-center py-12">
              <ActivityIndicator color="#1E40AF" size="large" />
              <Text className="text-gray-600 font-montserrat mt-3">Cargando catálogo...</Text>
            </View>
          )}

          {error && (
            <View className="bg-red-50 border border-red-200 rounded-2xl p-4 mx-4">
              <Text className="text-red-700 font-poppins-bold mb-2">Error</Text>
              <Text className="text-red-600 font-montserrat mb-3">{error}</Text>
              <Pressable
                onPress={refetch}
                className="bg-red-700 py-2 px-4 rounded-lg"
              >
                <Text className="text-white font-montserrat text-center">Reintentar</Text>
              </Pressable>
            </View>
          )}

          {!loading && !error && filteredBooks.length === 0 && (
            <View className="bg-blue-50 border border-blue-200 rounded-2xl p-6 mx-4">
              <Text className="text-blue-900 font-poppins-bold text-center mb-1">
                Sin resultados
              </Text>
              <Text className="text-blue-700 font-montserrat text-center">
                No se encontraron libros con esos filtros.
              </Text>
            </View>
          )}

          {!loading && !error && filteredBooks.length > 0 && (
            <FlatList
              data={filteredBooks}
              renderItem={renderBook}
              keyExtractor={(item) => item.id.toString()}
              numColumns={2}
              scrollEnabled={false}
              columnWrapperStyle={{ justifyContent: 'space-between' }}
            />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CatalogScreen;