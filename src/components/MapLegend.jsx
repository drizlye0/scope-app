import React, { useState } from 'react'
import ColorIndexView from './ColorIndexView'
import ButtonFaq from './ButtonFaq'
import { Animated } from 'react-native'


const MapLegend = () => {

  const [modalVisible, setModalVisible] = useState(false)
  const fadeAnim = React.useState(new Animated.Value(0))[0]

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
      Animated.timing(fadeAnim,
        {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        }
      ).start()
    }
  }
  return (
    <>
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
    </>
  )
}

export default MapLegend
