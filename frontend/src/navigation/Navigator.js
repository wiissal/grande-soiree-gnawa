import  { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import SplashScreen from '../Screens/SplashScreen';
import HomeScreen from '../Screens/HomeScreen';
import ArtistsListScreen from '../Screens/ArtistsListScreen';
import ArtistDetailScreen from '../Screens/ArtistDetailScreen';
import MyBookingsScreen from '../Screens/MyBookingsScreen';
import BookingFormScreen from '../Screens/BookingFormScreen';
import { colors } from '../constants/colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTitle: 'La Grande Soirée Gnawa',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 19,
          fontWeight: '400',
          colors: colors.black,
        },
        headerStyle: {
          backgroundColor: '#fff',
          elevation: 0,
          shadowOpacity: 0,
          borderBottomWidth: 0,
        },
        headerLeft: () => null,
      }}
    >
      <Stack.Screen name="HomeList" component={HomeScreen} />
      <Stack.Screen name="BookingForm" component={BookingFormScreen} />
    </Stack.Navigator>
  );
}

function ArtistsStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ArtistsList" component={ArtistsListScreen} />
      <Stack.Screen name="ArtistDetail" component={ArtistDetailScreen} />
    </Stack.Navigator>
  );
}

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Artists') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Bookings') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          }else if (route.name === 'BookingForm') {
            iconName = focused ? 'ticket' : 'ticket-outline';
          }
          return <Ionicons name={iconName} size={24} color={color} />;
        },
        tabBarActiveTintColor: '#C17A4C',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#1a1a1a',
          borderTopWidth: 0,
          paddingBottom: 3,
          paddingTop: 6,
          height: 60,
          borderTopRightRadius: 10,
          borderTopLeftRadius: 10, 
        },
        tabBarLabel: () => null,
      })}
    >
      <Tab.Screen name="Home" component={HomeStack} />
     <Tab.Screen 
  name="Artists" 
  component={ArtistsStack}
  listeners={({ navigation }) => ({
    tabPress: (e) => {
      e.preventDefault();
      navigation.reset({
        index: 0,
        routes: [{ name: 'Artists' }],
      });
    },
  })}
/>
       <Tab.Screen name="BookingForm" component={BookingFormScreen} />
      <Tab.Screen name="Bookings" component={MyBookingsScreen} />
    </Tab.Navigator>
  );
}

function Navigator() {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashVisible(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {isSplashVisible ? (
          <Stack.Screen name="Splash" component={SplashScreen} />
        ) : (
          <Stack.Screen name="Main" component={TabNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;