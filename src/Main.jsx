import React from 'react'
import styles from './styles'
import Map from './components/Map'
import { View } from 'react-native'
import ColorIndexView from './components/ColorIndexView'
import TopBarContainer from './components/TopBarContainer'
import ButtonFaq from './components/ButtonFaq'

export const Main = () => {

  const [isVisible, setVisible] = React.useState(false)
  const [modalVisible, setModalVisible] = React.useState(false)
  const [selectedZone, setSelectedZone] = React.useState(null)

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


      <ButtonFaq
        onPress={() => setModalVisible(!modalVisible)}
      />
      {modalVisible && <ColorIndexView />}
    </View>
  )
}
