import { StyleSheet, Dimensions } from "react-native";
import Constants from "expo-constants";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default StyleSheet.create({
  imgBg: {
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    backgroundColor: "#191919",
    resizeMode: "cover",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
    width: windowWidth,
    height: windowHeight,
    paddingHorizontal: 20,
    paddingTop: 30 + Constants.statusBarHeight,
  },
  topBar: {
    marginRight: "auto",
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    marginTop: 40,
  },
  focusInput: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 50,
  },
  focusTitle: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
  },
  focusBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  focusUp: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,

    backgroundColor: "transparent",
    borderColor: "#FD1E62",
    borderWidth: 3,
    borderStyle: "solid",
    borderLeftWidth: 0,

    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  focusValue: {
    height: 50,
    width: "70%",
    backgroundColor: "#FD1E62",
  },
  focusDown: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,

    backgroundColor: "transparent",
    borderColor: "#FD1E62",
    borderWidth: 3,
    borderStyle: "solid",
    borderRightWidth: 0,

    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },

  relaxInput: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 50,
  },
  relaxTitle: {
    fontSize: 20,
    color: "#fff",
    marginBottom: 10,
  },
  relaxBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  relaxDown: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,

    backgroundColor: "transparent",
    borderColor: "#33FE94",
    borderWidth: 3,
    borderStyle: "solid",
    borderRightWidth: 0,

    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  relaxValue: {
    height: 50,
    width: "70%",
    backgroundColor: "#33FE94",
  },
  relaxUp: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: 50,
    width: 50,

    backgroundColor: "transparent",
    borderColor: "#33FE94",
    borderWidth: 3,
    borderStyle: "solid",
    borderLeftWidth: 0,

    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
