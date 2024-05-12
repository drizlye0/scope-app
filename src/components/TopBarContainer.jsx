import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import styles from '../styles';

const TopBarContainer = ({ zone }) => {

  return (
    <View style={styles.topBar}>
      <Text style={styles.topBarText}>Esta zona es {zone}</Text>
    </View>
  );
};

export default TopBarContainer
