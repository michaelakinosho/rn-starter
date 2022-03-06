import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
  return (
    <View>
      <Text>Image Screen</Text>
      <ImageDetail
        title="Forest"
        imageSource={require('../../assets/forest.jpg')}
        imageRank="34"
      />
      <ImageDetail
        title="Beach"
        imageSource={require('../../assets/beach.jpg')}
        imageRank="57"
      />
      <ImageDetail
        title="Mountain"
        imageSource={require('../../assets/mountain.jpg')}
        imageRank="99"
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ImageScreen;
