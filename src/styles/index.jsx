import { StyleSheet } from "react-native"

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
    backgroundColor: "#F6F5F2",
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.1)',
    borderWidth: 1.2
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
    // left: '40%',
    bottom: 30,
    backgroundColor: "#F6F5F2",
    borderRadius: 100,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1.2
  },
})

export default styles

