import React from 'react'
import { View, Text } from 'react-native'
import styles from '../styles'
import BoxContainer from './BoxContainer'

const ColorIndexView = () => {
  return (
    <View style={styles.modal}>
      <BoxContainer color={"#ff0000"} text={"Peligroso"} />
      <BoxContainer color={"orange"} text={"Inseguro"} />
      <BoxContainer color={"#Ffff00"} text={"Cuidado"} />
    </View>
  )
}

export default ColorIndexView
