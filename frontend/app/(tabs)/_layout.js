import { Tabs } from 'expo-router';
import { colors } from '../../src/constants/colors';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.deepTeal,
        tabBarInactiveTintColor: colors.mistGrey,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{ title: 'Home' }}
      />
      <Tabs.Screen
        name="artists"
        options={{ title: 'Artists' }}
      />
      <Tabs.Screen
        name="bookings"
        options={{ title: 'Bookings' }}
      />
    </Tabs>
  );
}