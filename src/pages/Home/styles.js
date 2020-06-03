import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  imgBG: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: "#191919",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: 30 + Constants.statusBarHeight,
  },
  topBar: {
    marginLeft: "auto",
    marginRight: 20,
    marginTop: 20,
  },
  display: {
    width: 400,
    height: 400,
    marginTop: 50,

    borderWidth: 20,
    borderColor: "#FD1E62",
    borderStyle: "solid",
    borderRadius: 400 / 2,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textDisplay: {
    color: "#FD1E62",
    fontSize: 400 / 5,
  },
  controls: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",

    marginTop: 50,
  },
  controlBtn: {
    width: 80,
    height: 80,
    marginHorizontal: 20,
    borderRadius: 10,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
