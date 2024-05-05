import React, { useState } from 'react'
import styles from './styles'
import Map from './components/Map'
import { View } from 'react-native'
import TopBarContainer from './components/TopBarContainer'
import MapLegend from './components/MapLegendContainer'

export const Main = () => {

  const [isVisible, setVisible] = useState(false)
  const [selectedZone, setSelectedZone] = useState(null)

  const handleZonePress = (zone) => {
    setSelectedZone(zone)
    setVisible(true)
  }

  return (
    <View style={styles.container}>
      <Map
        showTopBar={() => setVisible(false)}
        onSelectZone={handleZonePress}
      />
      {isVisible && <TopBarContainer zone={selectedZone} />}
      <MapLegend />
    </View>
  )
}
