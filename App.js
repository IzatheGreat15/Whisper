import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './assets/logo.png';
import Auth from './pages/Auth';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Poppins-light' : require('./assets/fonts/Poppins-Light.ttf'),
  });
  return (
    <View>
      {/* <Text>Open up here to start working on your app!</Text>
      <StatusBar style="auto" />
      <img src={Logo}></img> */}
      <Auth />
    </View>
  );
}