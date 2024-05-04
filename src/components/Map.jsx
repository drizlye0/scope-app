import React from "react";
import MapView, { Polygon } from "react-native-maps";
import mapStyle from "../styles/mapStyle";
import styles from "../styles";
import Coordinates from "./CoordinatesContainer";

function Map({showTopBar}) {

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
        {Object.keys(Coordinates).map(city => (
          <Polygon
            key={city}
            strokeColor={Coordinates[city].strokeColor}
            fillColor={Coordinates[city].fillColor}
            strokeWidth={Coordinates[city].strokeWidth}
            coordinates={Coordinates[city].coordinates}
            tappable={true}
            onPress={showTopBar}
          />
        ))}
      </MapView>
    </>
  )
}

export default Map
