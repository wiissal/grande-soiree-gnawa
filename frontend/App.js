import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Navigator from './src/navigation/Navigator';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Navigator />
    </GestureHandlerRootView>
  );
}