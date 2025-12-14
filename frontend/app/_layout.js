import {Tabs} from 'expo-router';
import { colors } from '../src/constants/colors';
export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: colors.deepTeal,
        tabBarInactiveTintColor: colors.mistGrey,
      }}
    >
      <Tabs.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
    </Tabs>
  );
}