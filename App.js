import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, TextInput } from 'react-native';

function InputArea(props) {
  const [text, setText] = useState('')
  const onPress = () => {
    props.addEat(text);
    setText('');
  }
  return (
      <View style={ styles.inputContainer }>
        <TextInput style={ styles.input } onChangeText={(_text) => setText(_text)} value={text}/>
        <TouchableOpacity style={ styles.button } onPress={onPress}>
          <Text style={ styles.buttonText} >イートする</Text>
        </TouchableOpacity>
      </View>
  )
}
function Eat(props) {
  const {
    text,
  } = props
  return (
    <View style={eatStyles.container}>
      <Text style={eatStyles.text}>{text}</Text>
    </View>
  )
}
export default function App() {
  const [eat, setEat] = useState([]);
  const addEat = (text) => {
    const newEat = [].concat(eat);
    newEat.push({
      text,
    });
    setEat(newEat);
  }
  return (
    <SafeAreaView style={ styles.safeArea }>
      <View style={ styles.container }>
        <InputArea addEat={ addEat }/>
        <View style={ styles.content }>{
          eat.map((elem, index) => <Eat key={index} text={elem.text}/>)
        }</View>
        <StatusBar style="light"/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#222',
  },
  container: {
    flex: 1,
    paddingTop: 20,
  },
  button: {
    backgroundColor: 'rgb(29, 161, 242)',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: '900',
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    borderColor: 'rgb(29, 161, 242)',
    borderWidth: 2,
    marginRight: 10,
    borderRadius: 10,
    color: 'white',
    paddingHorizontal: 10,
    fontSize: 16,
  },
  content: {
    padding: 20,
  },
  contentText: {
    color: 'white',
    fontSize: 22,
  },
});
const eatStyles = StyleSheet.create({
  container: {
    borderWidth: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: 'rgb(29, 161, 242)',
    marginBottom: 10,
    borderRadius: 5,
  },
  text: {
    color: 'white',
    fontSize: 16,
  }
})