import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  imgBG: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "#191919",
    resizeMode: "cover",
  },

  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: 20,
    marginTop: 30 + Constants.statusBarHeight,
  },
  topBar: {
    marginLeft: "auto",
    marginTop: 20,
  },
  display: {
    width: windowWidth * 0.85,
    height: windowWidth * 0.85,
    marginTop: 50,

    borderWidth: 20,
    borderColor: "#FD1E62",
    borderStyle: "solid",
    borderRadius: (windowWidth * 0.85) / 2,

    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  textDisplay: {
    color: "#FD1E62",
    fontSize: windowWidth / 5,
  },
  controls: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: windowWidth * 0.8,

    marginTop: 50,
  },
  controlBtn: {
    width: (windowWidth * 0.8) / 4,
    height: (windowWidth * 0.8) / 4,
    borderRadius: 10,

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
