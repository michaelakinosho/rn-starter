import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = props => {
  console.log(props);
  return (
    <View style={styles.imageStyle}>
      <Image source={props.imageSource} style={{width: '25%', height: 100}}/>
      <Text>Image name is: {props.title}</Text>
      <Text>Image ranke is - {props.imageRank}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    margin: 50,
  }
});

export default ImageDetail;
