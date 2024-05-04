import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import styles from '../styles/index.jsx'


const BoxContainer = ({ color, text }) => {
  const style = StyleSheet.create({
    view: {
      backgroundColor: color,
      width: 10,
      height: 10,
      marginRight: 5,
    }
  })


  return (
    <View style={styles.inlineBox}>
      <View style={style.view} />
      <Text>{text}</Text>
    </View>
  )
}

export default BoxContainer

