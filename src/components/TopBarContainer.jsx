import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const TopBarContainer = () => {

  return (
    <View style={styles.topBar}>
      <Text>¡Hola Mundo!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  topBar: {
    position: 'absolute',
    top: 0,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: 20,
    marginTop: Constants.statusBarHeight,
  },
})
export default TopBarContainer
