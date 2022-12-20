import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Logo from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up here to start working on your app!</Text>
      <StatusBar style="auto" />
      <img src={Logo}></img>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
