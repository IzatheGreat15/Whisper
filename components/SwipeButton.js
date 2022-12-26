import {View, Text, StatusBar, Pressable, StyleSheet} from 'react-native';

const SwipeButton = (props) => {
  return (
   <View style={styles.container}>
    {/* LOGIN BUTTON */}
    <Pressable 
      style={props.value == 'Login' ? styles.selected : styles.default}
      onPress={()=>{ props.chooseValue('Login') }}>
      <Text style={props.value == 'Login' ? styles.selectedtext : styles.defaulttext}>Login</Text>
    </Pressable>

    {/* SIGNUP BUTTON */}
    <Pressable 
      style={props.value == 'Signup' ? styles.selected : styles.default}
      onPress={()=>{ props.chooseValue('Signup') }}>
      <Text style={props.value == 'Signup' ? styles.selectedtext : styles.defaulttext}>Signup</Text>
    </Pressable>
   </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderRadius: 50,
    padding: 5,
    width: '90%',
    height: 40,
    top: 100,
    flexDirection: 'row',
  },
  selected: {
    backgroundColor: '#6D67E4',
    width: '50%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedtext: {
    color: 'white',
  },
  default: {
    backgroundColor: 'white',
    width: '50%',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  defaulttext: {
    color: '#6D67E4',
  }
})


export default SwipeButton