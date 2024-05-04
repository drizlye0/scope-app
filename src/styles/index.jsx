import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%"
  },

  container: {
    flex: 1,
  },
  modal: {
    position: "absolute",
    alignItems: "flex-start",
    justifyContent: "center",
    width: 200,
    height: 100,
    right: 30,
    bottom: 50,
    backgroundColor: "#F6F5F2",
    borderRadius: 20,
    borderColor: 'rgba(0,0,0,0.2)',
    borderWidth: 1.2
  },
  inlineBox: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: 40,
  },
})

export default styles

