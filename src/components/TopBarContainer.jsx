import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const TopBarContainer = ({ zone }) => {

  return (
    <View style={styles.topBar}>
      <Text style={styles.text}>this zone is {zone}</Text>
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
  text: {
    color: "#fff",
  }
})
export default TopBarContainer
