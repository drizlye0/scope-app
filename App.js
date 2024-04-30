import React from "react";
import styles from "./styles";
import Map from "./components/Map";
import { View } from "react-native";
import ColorIndexView from "./components/ColorIndexView"; 

export default function App() {
  return (
    <View style={styles.container}>
      <Map />
      <ColorIndexView />
    </View>
  );
}

