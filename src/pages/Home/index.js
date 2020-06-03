import React from "react";
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "@use-expo/font";
import { FontAwesome5 } from "@expo/vector-icons";

import styles from "./styles";
import background from "../../assets/img/bg.png";

let customFonts = {
  "Quantico-Regular": require("../../assets/fonts/Quantico-Regular.ttf"),
  "Quantico-Bold": require("../../assets/fonts/Quantico-Bold.ttf"),
};

export default function Home() {
  [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground source={background} style={styles.imgBG}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
        networkActivityIndicatorVisible={true}
      />
      <View style={styles.container}>
        <View style={styles.topBar}>
          <FontAwesome5 name="cog" size={40} color="#fff" />
        </View>
        <View style={styles.display}>
          <Text style={[styles.textDisplay, { fontFamily: "Quantico-Bold" }]}>
            25:00
          </Text>
        </View>
        <View style={styles.controls}>
          <TouchableOpacity
            style={[styles.controlBtn, { backgroundColor: "#33FE94" }]}
          >
            <FontAwesome5 name="play" size={35} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.controlBtn, { backgroundColor: "#FFB053" }]}
          >
            <FontAwesome5 name="pause" size={35} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.controlBtn, { backgroundColor: "#FF5B5E" }]}
          >
            <FontAwesome5 name="stop" size={35} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
