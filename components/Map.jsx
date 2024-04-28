import React from "react";
import MapView, { Polygon } from "react-native-maps";
import mapStyle from "../styles/mapStyle";
import styles from "../styles";

function Map() {

  const polygonCoordinates = [
    { latitude: 25.85338150817608, longitude: -97.49098163098097, },
    { latitude: 25.84614666134398, longitude: -97.4911093711853, },
    { latitude: 25.847869571433534, longitude: -97.48461976647377 },
    { latitude: 25.853146468603097, longitude: -97.4860480427742 }
  ]
  const regionCity = {
    latitude: 25.871484185490594,
    longitude: -97.504314891994,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05
  }
  return (
    <>
      <MapView
        provider="google"
        style={styles.map}
        customMapStyle={mapStyle}
        initialRegion={regionCity}
        onPress={e => console.log(e.nativeEvent)}
      >
        <Polygon
          strokeColor="#ff0000"
          fillColor="rgba(255, 41, 41, 0.1)"
          strokeWidth={4}
          coordinates={polygonCoordinates}
        />
      </MapView>
    </>
  )
}

export default Map
