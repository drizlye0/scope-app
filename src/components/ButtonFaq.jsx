import React from 'react'
import { View, Text, TouchableHighlight } from 'react-native'
import styles from '../styles'

const ButtonFaq = ({ onPress }) => {
  return (
    <TouchableHighlight
      onPress={onPress}
    >
      <View style={styles.buttonFaq}>
        <Text>?</Text>
      </View>
    </TouchableHighlight>
  )
}


export default ButtonFaq
