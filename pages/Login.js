import { StyleSheet, View } from 'react-native';
import BottomTextInput from '../components/BottomTextInput';
import Button from '../components/Button';

const Login = () => {
  return (
    <View style={styles.container}>
        <BottomTextInput label='Email Address' placeholder='johndoe@email.com' />
        <BottomTextInput label='Password' placeholder='**********' />
        <Button bgColor='transparent' 
                bRadius={ 50 }
                bColor='white'
                text='Login'
                color='white'
                />
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
