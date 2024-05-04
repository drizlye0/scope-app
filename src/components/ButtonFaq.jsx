import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native'

const ButtonFaq = ({ onPress }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
    >
      <View style={styles.modal}>
        <Text>?</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  modal: {
    position: "absolute",
    alignSelf: 'center',
    alignItems: "center",
    justifyContent: 'center',
    width: 50,
    height: 50,
    // left: '40%',
    bottom: 30,
    backgroundColor: "#F6F5F2",
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1.2
  },
})

export default ButtonFaq
