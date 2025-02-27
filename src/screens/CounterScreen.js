import React, { useReducer } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const reducer = (state, action) => {
  // state === { counter: number }
  // action === { type: 'increase' || 'decrease', payload: 1}
  switch (action.type) {
    case 'increase':
      return { ...state, counter: state.counter + action.payload }
    case 'decrease':
      return { ...state, counter: state.counter + action.payload }
    default:
      return state;
  }
}

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, {counter: 0});
  const { counter } = state;
  
  return (
    <View>
    <View>
      <Button title="Increase" onPress={() => {
        dispatch({type: 'increase', payload: 1});
        // Don't do this!
        // counter++;
      }}/>
      <Button title="Decrease" onPress={() => {
        dispatch({type: 'decrease', payload: -1});
      }} />
    </View>
    
      <Text>Current Count: {counter}</Text>
    
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;