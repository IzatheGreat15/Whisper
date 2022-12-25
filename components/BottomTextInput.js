import { StyleSheet, Text, View, TextInput } from 'react-native';
import BG from '../assets/bg.png';

const BottomTextInput = (props) => {
  return (
    <View style={styles.container}>
        <Text style={styles.label}>{ props.label }</Text>
        <TextInput 
            style={styles.input}
            placeholder={ props.placeholder }>
        </TextInput>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        width: '90%', 
    },
    label: {
        marginBottom: 15,
        color: 'white',
        fontSize: 18,
    },
    input: {
        height: 50,
        borderWidth: 1,
        borderColor: 'transparent',
        borderBottomColor: 'white',
        padding: 10,
        marginBottom: 15,
        color: 'white',
        keyboardType: 'email',
        outlineStyle: 'none',
    }
});

export default BottomTextInput;
