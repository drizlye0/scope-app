import React from 'react'
import styles from './styles'
import { View } from 'react-native'
import MapLegend from './components/MapLegend'
import Map from './components/Map'

export const Main = () => {

  return (
    <View style={styles.container}>
      <Map />
      <MapLegend />
    </View>
  )
}
