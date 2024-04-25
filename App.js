import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initalRegion: {
        latitude: 25.9018,
        longitude: -97.4975,
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={this.state}
        />
      </View>
    )
  }


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  }
})

export default App
