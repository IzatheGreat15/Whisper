import { StyleSheet, View } from 'react-native';
import BottomTextInput from '../components/BottomTextInput';

const Login = () => {
  return (
    <View style={styles.container}>
        <BottomTextInput label='Email Address' placeholder='johndoe@email.com' />
        <BottomTextInput label='Password' placeholder='**********' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Login;
