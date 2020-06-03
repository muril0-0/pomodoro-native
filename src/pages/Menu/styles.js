import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export default StyleSheet.create({
  imgBg: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: "#191919",
  },
  container: {
    display: "flex",
    flexDirection: "column",
    marginTop: 20 + Constants.statusBarHeight,
  },
  topBar: {
    marginRight: "auto",
    marginLeft: 20,
  },
  inputs: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    marginHorizontal: 20,
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

    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  focusValue: {
    height: 50,
    width: 340,
    backgroundColor: "#FD1E62",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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

    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  relaxValue: {
    height: 50,
    width: 340,
    backgroundColor: "#33FE94",

    display: "flex",
    alignItems: "center",
    justifyContent: "center",
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

    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
