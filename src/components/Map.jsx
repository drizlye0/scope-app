import React, { useEffect } from 'react'
import MapContainer from './MapContainer'
import TopBarContainer from './TopBarContainer'
import { useState } from 'react'
import { Animated, Easing } from 'react-native'

const Map = () => {

  const [selectedZone, setSelectedZone] = useState(null)
  const [animation] = useState(new Animated.Value(0))
  const [isTopBarVisible, setTopBarVisible] = useState(false)

  useEffect(() => {
    animateTopBar(isTopBarVisible ? 1 : 0, () => {
      if (!isTopBarVisible) {
        setSelectedZone(null)
      }
    })
  }, [isTopBarVisible])

  const handleZonePress = (zone) => {
    if (zone === selectedZone) {
      setTopBarVisible(false)
    } else {
      setSelectedZone(zone)
      setTopBarVisible(true)
    }
  }

  const animateTopBar = (value, callback) => {
    Animated.timing(animation, {
      toValue: value,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true
    }).start(callback)
  }

  return (
    <>
      <MapContainer
        onSelectZone={handleZonePress}
      />
      <Animated.View
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          opacity: animation,
          transform: [
            {
              translateY: animation.interpolate({
                inputRange: [0, 1],
                outputRange: [-100, 0],
              }),
            },
          ],
        }}
      >
        <TopBarContainer zone={selectedZone} />
      </Animated.View>
    </>
  )
}

export default Map
