import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  console.log(password)

  return (
    <View>
    <View>
      <Text>Enter Fullname:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder ="Enter Fullname"
        value={name}
        onChangeText = {(newValue) => setName(newValue)}
        />
        <Text>My name is {name}</Text>
    </View>
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText = {(newPassword) => setPassword(newPassword)}
        
        />
        { password.length < 6 ? <Text>Password must be longer than 5 characters</Text> : null }
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 1,
    borderColor: 'black',
    borderWidth: 1,
  }
});

export default TextScreen;