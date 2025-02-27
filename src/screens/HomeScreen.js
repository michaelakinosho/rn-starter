import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = ({navigation}) => {
  
  return ( 
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button style={styles.button}
        onPress={() => navigation.navigate('Components')}
        title="Go to Components Demo"/>
      <Button
        onPress={() => navigation.navigate('List')}
        title="Go to List Demo"/>  
      <Button
        onPress={() => navigation.navigate('Images')}
        title="Go to Images Screen"/>
      <Button
        onPress={() => navigation.navigate('Counter')}
        title="Go to Counter Demo"/>
      <Button
        onPress={() => navigation.navigate('Color')}
        title="Go to Color Demo"/>
      <Button
        onPress={() => navigation.navigate('Square')}
        title="Go to Square Demo"/>
      <Button
        onPress={() => navigation.navigate('Text')}
        title="Go to Text Demo"/>
      <Button
        onPress={() => navigation.navigate('Box')}
        title="Go to Box Demo"/>

      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    marginBottom: 50,
  }
});

export default HomeScreen;
