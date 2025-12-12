import React, { useState } from 'react';
import { View, Text, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HapticButton from '../components/HapticButton';

const CoWorkingScreen = () => {
  const [bookingLoading, setBookingLoading] = useState(null);
  
  const spaces = [
    {
      id: 1,
      name: "Zona Silenciosa",
      emoji: "🤫",
      capacity: 24,
      description: "Escritorios individuales con iluminación natural",
      features: ["Escritorios individuales", "Iluminación natural", "Enchufes individuales", "WiFi de alta velocidad"],
      price: 3,
      available: true,
      type: "Individual"
    },
    {
      id: 2,
      name: "Sala Colaborativa",
      emoji: "👥",
      capacity: 16,
      description: "Mesas compartidas con pizarra digital",
      features: ["Mesas compartidas", "Pizarra digital", "Proyector", "Café gratuito"],
      price: 5,
      available: true,
      type: "Grupal"
    },
    {
      id: 3,
      name: "Sala de Reuniones",
      emoji: "📊",
      capacity: 8,
      description: "Mesa de reuniones con equipamiento completo",
      features: ["Mesa de reuniones", "TV 55'", "Videoconferencia", "Pizarra"],
      price: 15,
      available: false,
      type: "Sala de Reuniones"
    }
  ];

  const handleBooking = (space) => {
    if (!space.available) return;

    setBookingLoading(space.id);

    setTimeout(() => {
      Alert.alert(
        '¡Reserva Exitosa!',
        `Has reservado ${space.name} por 1 hora.`,
        [{ text: 'OK' }]
      );
      setBookingLoading(null);
    }, 1000);
  };
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <ScrollView className="flex-1">
        <View className="bg-purple-700 pt-8 pb-12 px-6 rounded-b-3xl">
          <Text className="text-white text-4xl font-poppins-bold mb-2">
            💼 Espacios Co-Working
          </Text>
          <Text className="text-purple-100 text-base font-montserrat">
            Reserva tu espacio de trabajo ideal
          </Text>
        </View>

        <View className="mx-6 mt-6 mb-4">
          <View className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl p-6 shadow-lg">
            <View className="flex-row items-center mb-3">
              <Text className="text-3xl mr-3">🚀</Text>
              <Text className="text-white text-xl font-poppins-bold">
                ¡Espacios Premium!
              </Text>
            </View>
            <Text className="text-purple-100 text-base font-montserrat mb-3">
              Reserva tu espacio ideal con descuento del 20%
            </Text>
            <View className="bg-white bg-opacity-20 rounded-xl px-4 py-2">
              <Text className="text-white text-sm font-montserrat text-center">
                💼 Primera hora gratis • Membresía disponible
              </Text>
            </View>
          </View>
        </View>

        <View className="px-6 pb-8">
          {['Individual', 'Grupal', 'Sala de Reuniones'].map(spaceType => {
                const typeSpaces = spaces.filter(space => space.type === spaceType);
                if (typeSpaces.length === 0) return null;

                return (
                  <View key={spaceType} className="mb-8">
                    <Text className="text-xl font-poppins-bold text-gray-800 mb-4">
                      {spaceType}
                    </Text>

                    {typeSpaces.map(space => (
                      <View key={space.id} className="bg-white rounded-2xl p-4 mb-4 shadow-md border border-gray-100">
                        <View className="flex-row">
                          <View className="w-20 h-20 bg-purple-50 rounded-xl items-center justify-center mr-4">
                            <Text className="text-3xl">{space.emoji}</Text>
                          </View>

                          <View className="flex-1">
                            <Text className="text-lg font-poppins-bold text-gray-800 mb-1">
                              {space.name}
                            </Text>
                            <Text className="text-sm font-montserrat text-gray-600 mb-1">
                              Capacidad: {space.capacity} personas
                            </Text>
                            <Text className="text-sm font-montserrat text-gray-600 mb-2">
                              {space.description}
                            </Text>
                            <View className="flex-row justify-between items-center">
                              <View>
                                <Text className="text-xl font-poppins-bold text-purple-600">
                                  ${space.price}/hora
                                </Text>
                                <Text className="text-xs font-montserrat text-gray-500">
                                  {space.available ? 'Disponible' : 'Ocupado'}
                                </Text>
                              </View>
                              <HapticButton
                                title={bookingLoading === space.id ? "Reservando..." : "Reservar"}
                                onPress={() => handleBooking(space)}
                                className={`px-4 py-2 ${space.available ? 'bg-purple-600' : 'bg-gray-400'}`}
                                textClassName="text-sm"
                                hapticType={space.available ? 'medium' : 'light'}
                                disabled={!space.available || bookingLoading === space.id}
                              />
                            </View>
                          </View>
                        </View>

                        <View className="flex-row flex-wrap mt-3">
                          {space.features?.map((feature, index) => (
                            <View key={index} className="bg-purple-50 rounded-lg px-2 py-1 mr-2 mb-1">
                              <Text className="text-xs font-montserrat text-purple-700">
                                {feature}
                              </Text>
                            </View>
                          ))}
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

export default CoWorkingScreen;