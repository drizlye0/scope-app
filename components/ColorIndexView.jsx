import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'
import BoxContainer from './BoxContainer'

const ColorIndexView = () => {
  return (
    <View style={styles.modal}>
      <BoxContainer color={"#ff0000"} text={"Danger"}/>
      <BoxContainer color={"#Ffff00"} text={"Warning"}/>
      <BoxContainer color={"green"} text={"Safe"}/>
    </View>
  )
}

export default ColorIndexView
