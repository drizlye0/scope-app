import React from 'react'
import styles from './styles'
import Map from './components/Map'
import { View, Animated } from 'react-native'
import ColorIndexView from './components/ColorIndexView'
import TopBarContainer from './components/TopBarContainer'
import ButtonFaq from './components/ButtonFaq'

export const Main = () => {

  const [isVisible, setVisible] = React.useState(false)
  const [modalVisible, setModalVisible] = React.useState(false)
  const [selectedZone, setSelectedZone] = React.useState(null)
  const fadeAnim = React.useState(new Animated.Value(0))[0]

  const handleZonePress = (zone) => {
    setSelectedZone(zone)
    setVisible(true)
  }

  const toggleView = () => {
    if (modalVisible) {
      Animated.timing(
        fadeAnim,
        {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }
      ).start(() => setModalVisible(false))
    } else {
      setModalVisible(true)
      Animated.timing(
        fadeAnim,
        {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }
      ).start()
    }
  }

  return (
    <View style={styles.container}>


      <Map
        showTopBar={() => setVisible(false)}
        onSelectZone={handleZonePress}
      />

      {isVisible && <TopBarContainer zone={selectedZone} />}


      <ButtonFaq
        onPress={toggleView}
      />
      <Animated.View
        style={{
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 0],
              }),
            },
          ],
        }}
      >
        {modalVisible && <ColorIndexView />}
      </Animated.View>
    </View>
  )
}
