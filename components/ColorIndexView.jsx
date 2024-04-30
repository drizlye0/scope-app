import React from 'react'
import { View, Text } from 'react-native'

const ColorIndexView = () => {
  return (
    <View
      style={
        {
          position: "absolute",
          alignItems: "center",
          justifyContent: "center",
          width: 200,
          height: 200,
          right: 30,
          bottom: 50,
          backgroundColor: "#FAF9F6",
          borderRadius: 20,
        }
      }
    >
      <Text>Red: Danger</Text>
      <Text>Yellow: Warning</Text>
    </View>
  )
}

export default ColorIndexView
