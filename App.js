import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Dimensions } from "react-native";

const texasRegion = {
  latitude: 31.9686,
  longitude: -99.9018,
  latitudeDelta: 10, // Ajusta este valor según el nivel de zoom deseado
  longitudeDelta: 10,
};

export default function App() {
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        provider="google"
        initialRegion={texasRegion}
        mapType="terrain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});
