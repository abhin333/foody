import {
    View,
    TextInput,
    StyleSheet,
  } from 'react-native';
  
  import { Feather } from '@expo/vector-icons';
  
  export default function SearchBar() {
    return (
      <View style={styles.container}>
        <Feather
          name="search"
          size={20}
          color="#888"
        />
  
        <TextInput
          placeholder="Search for the Food Items"
          style={styles.input}
        />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      marginTop: 20,
      height: 50,
      borderWidth: 1,
      borderColor: '#d8a8a8',
      borderRadius: 30,
      backgroundColor: '#fff',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 18,
    },
  
    input: {
      flex: 1,
      marginLeft: 10,
      fontSize: 15,
    },
  });