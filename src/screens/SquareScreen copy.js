import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ColorCounter from '../components/ColorCounter';

const COLOR_INCREMENT = 20;

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  
  
  console.log(red,green,blue)
  
  const setColor = (color, change) => {
    // color === 'red', 'green','blue'
    // change === +15, -15

    switch (color) {
      case 'red':
        if (red + change > 255) {
          setRed(255);
        } else if (red + change < 0) {
          setRed(0);
        } else {
          setRed(red + change);
        }
        return;
      
      case 'green':
        if (green + change > 255) {
          setGreen(255);
        } else if (green + change < 0) {
          setGreen(0);
        } else {
          setGreen(green + change);
        }
        return;
      
      case 'blue':
        if (blue + change > 255) {
          setBlue(255);
        } else if (blue + change < 0) {
          setBlue(0);
        } else {
          setBlue(blue + change);
        }
        return;
      default:
        return;
    }

  }

  return (
    <View>
      <ColorCounter
        onIncrease={() => setColor('red', COLOR_INCREMENT)}
        onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)}
        color="Red"
      />
      <ColorCounter
        onIncrease={() => setColor('green', COLOR_INCREMENT)}
        onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)}
        color="Green"
      />
      <ColorCounter
        onIncrease={() => setColor('blue', COLOR_INCREMENT)}
        onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)}
        color="Blue" />
    <View
      style={{
        height: 150,
        width: 150,
        backgroundColor:`rgb(${red},${green},${blue})`}} />
    </View>
    
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;