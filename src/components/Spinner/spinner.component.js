import React from 'react';

import { View, StyleSheet, ActivityIndicator, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function Spinner() {
  return (
    <View style={[styles.container]}>
      <ActivityIndicator size="large" color="#001A64" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 0,
    position: 'absolute',
    top: 0,
    zIndex: 3,
    opacity: 0.8,
    backgroundColor: 'gray',
    height: windowHeight,
    width: windowWidth,
  },
});
