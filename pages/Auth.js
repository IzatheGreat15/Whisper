import { useState } from 'react';
import { StyleSheet, Text, View, Image, ImageBackground, Dimensions } from 'react-native';
import BG from '../assets/bg.png';
import SwipeButton from '../components/SwipeButton';
import Login from './Login';

const screenHeight = Dimensions.get('screen').height;
const screenWidth = Dimensions.get('screen').width;

const Auth = () => {
  const [value, setValue] = useState("Signup");

  const chooseValue = (value) => {
    setValue(value);
  };

  return (
    <View style={styles.container}>
        <ImageBackground
            source={require('../assets/bg.png')}
            resizeMode="cover"
            style={styles.img}>
            
            <View style={styles.rectangle}>
              <View style={styles.circle}>
                  <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
              </View>

              <SwipeButton value={ value } chooseValue={ chooseValue } />
              
              <Login />
            </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#6D67E4',
  },
  img: {
    height: screenHeight,
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0%',
  },
  circle: {
    backgroundColor: '#6D67E4',
    borderWidth: 2,
    borderRadius: 50,
    height: 100,
    width: 100,
    zIndex: 1,
    position: 'absolute',
    top: '-8%',
    borderColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
    width: '80%',
  },
  logo: {
    width: '70%',
    height: '70%',
  }
});

export default Auth;
