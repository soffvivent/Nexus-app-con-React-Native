import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Cambiar el import - quitar '../screens/'
import LandingScreen from '../screens/LandingScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Navegación por Tabs (Bottom Tabs)
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Books') {
            iconName = focused ? 'book' : 'book-outline';
          } else if (route.name === 'CoWorking') {
            iconName = focused ? 'laptop' : 'laptop-outline';
          } else if (route.name === 'Cafe') {
            iconName = focused ? 'cafe' : 'cafe-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#1E40AF',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={LandingScreen}
        options={{ title: 'Inicio' }}
      />
      {/* Aquí tus compañeros agregarán las otras pantallas */}
      {/* 
      <Tab.Screen 
        name="Books" 
        component={BooksScreen}
        options={{ title: 'Libros' }}
      />
      <Tab.Screen 
        name="CoWorking" 
        component={CoWorkingScreen}
        options={{ title: 'Co-Working' }}
      />
      <Tab.Screen 
        name="Cafe" 
        component={CafeScreen}
        options={{ title: 'Cafetería' }}
      />
      */}
    </Tab.Navigator>
  );
}

// Navegación por Stack (Principal)
function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1E40AF',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen 
          name="Main" 
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        {/* Aquí se pueden agregar más pantallas Stack si es necesario */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
