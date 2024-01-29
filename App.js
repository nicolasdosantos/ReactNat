import { StatusBar } from 'expo-status-bar';
import {Button, StyleSheet, Text, View} from 'react-native';
import {useState} from "react";

export default function App() {

  const [vezes, setVezes] = useState(0)

  function contar (){
    setVezes( vezes + 1)
  }

  function sub (){
    setVezes( vezes - 1)
  }

  return (
    <View style={styles.container}>
      <Button title={"Some"} onPress={contar}></Button>
      
      <Button title={"Subtraia"} onPress={sub}></Button>
      <Text style={styles.text}>{vezes}</Text>
      <StatusBar style="auto" backgroundColor={"purple"} translucent={false}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 80,
    color: "purple"
  },

});
