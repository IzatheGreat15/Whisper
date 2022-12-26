import {View, Text, StatusBar, Pressable, StyleSheet} from 'react-native';

const Button = (props) => {
  return (
    <View style={styles.container}>
        <Pressable 
            style={[styles.button, 
                    {backgroundColor: props.bgColor, 
                    borderRadius: props.bRadius, 
                    borderColor: props.bColor}]}>
            <Text style={{color: props.color}}>{ props.text }</Text>
        </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '90%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10
  },
  button: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderWidth: 1
  }
})


export default Button