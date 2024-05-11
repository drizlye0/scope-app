import { StyleSheet } from "react-native"
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%"
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    position: "absolute",
    alignSelf: 'center',
    justifyContent: 'center',
    width: 140,
    height: 100,
    bottom: 90,
    backgroundColor: "#fff",
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1.1
  },
  inlineBox: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 40,
  },
  buttonFaq: {
    position: "absolute",
    alignSelf: 'center',
    alignItems: "center",
    justifyContent: 'center',
    width: 50,
    height: 50,
    bottom: 30,
    backgroundColor: "#fff",
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1.1
  },

  topBar: {
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1.1,
    top: 10,
    width: '90%',
    backgroundColor: '#fff',
    padding: 20,
    marginTop: Constants.statusBarHeight,
  },
  topBarText: {
    color: 'black'
  }
})

export default styles

