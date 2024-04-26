import React from "react";
import MapView from "react-native-maps";
import mapStyle from "../styles/mapStyle";
import styles from "../styles";

function Map() {
  const regionCity = {
    latitude: 25.871484185490594,
    longitude: -97.504314891994,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05
  }
  return (
    <MapView
      provider="google"
      style={styles.map}
      customMapStyle={mapStyle}
      initialRegion={regionCity}
      onPress={e => console.log(e.nativeEvent)}
    />
  )
}

export default Map
