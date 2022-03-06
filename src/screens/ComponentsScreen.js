import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
  const greeting = <Text>Hello to you!</Text>
  const greeting2 = [123,234,'abc','def']
  const yourname = "Michael Akinosho"

  return (
    <View>
      <Text style={styles.textStyleOne}>Getting started with React Native!</Text>
      {greeting}
      <Text>{greeting2}</Text>
      <Text style={styles.textStyleTwo}>My name is {yourname}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyleOne: {
    fontSize: 45
  },
  textStyleTwo: {
    fontSize: 20
  }
});

export default ComponentsScreen;