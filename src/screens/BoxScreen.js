import React from 'react';
import {Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewContainer}>
      <View style={styles.viewStyle}>
        <Text style={styles.textStyle}>Box Screen</Text>
      </View>
      <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Child #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
      </View>
      <View style={styles.viewColorStyle}>
        <Text style={styles.textRedStyle}>Child #1</Text>
        <Text style={styles.textGreenStyle}>Child #2</Text>
        <Text style={styles.textPurpleStyle}>Child #3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  viewContainer: {
    padding:0,
  },
  viewStyle: {
    borderWidth: 1,
    borderColor: 'black',
    //alignItems: 'center', //applied at the parent level, impacting child element
    //flexDirection: 'row', //applied at the parent level, impacting child element
    //justifyContent: 'space-around', //applied at the parent level, impacting child element
    height: 200,
  },
  viewColorStyle: {
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'flex-start', //applied at the parent level, impacting child element
    flexDirection: 'row', //applied at the parent level, impacting child element
    //justifyContent: 'space-around', //applied at the parent level, impacting child element
    height: 200,
  },
  textOneStyle: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 10,
    padding: 10,
    flex: 1,
    bottom: 0,
  },
  textTwoStyle: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 10,
    padding: 10,
    flex: 1,
    alignSelf: 'center', //applied to the same level element
    position: 'relative',
  },
  textThreeStyle: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 10,
    padding: 10,
    flex: 1,
    top: 0,    
  },
  textRedStyle: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 10,
    padding: 10,
    flex: 1,
    bottom: 0,
    backgroundColor: 'red',
  },
  textGreenStyle: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 10,
    padding: 10,
    flex: 1,
    alignSelf: 'center', //applied to the same level element
    position: 'relative',
    backgroundColor: 'green',
  },
  textPurpleStyle: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 10,
    padding: 10,
    flex: 1,
    top: 0,
    backgroundColor: 'purple'
  },
  textStyle: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 10,
    padding: 10,
  },
})

export default BoxScreen;