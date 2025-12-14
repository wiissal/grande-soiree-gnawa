import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { colors } from '../constants/colors';

// Screens
import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';
import ArtistsListScreen from '../Screens/ArtistsListScreen';
import ArtistDetailScreen from '../Screens/ArtistDetailScreen';
import BookingFormScreen from '../Screens/BookingFormScreen';
import MyBookingsScreen from '../Screens/MyBookingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Bottom Tab Navigation
function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: colors.deepTeal,
        tabBarInactiveTintColor: colors.mistGrey,
        headerShown: true,
      }}
    >
      <Tab.Screen name="HomeTab" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="ArtistsTab" component={ArtistsListScreen} options={{ title: 'Artists' }} />
      <Tab.Screen name="BookingsTab" component={MyBookingsScreen} options={{ title: 'My Bookings' }} />
    </Tab.Navigator>
  );
}

// Main Navigation
export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Splash"
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="ArtistDetail" component={ArtistDetailScreen} />
        <Stack.Screen name="BookingForm" component={BookingFormScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}