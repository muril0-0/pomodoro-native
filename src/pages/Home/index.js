import React, { useState, useEffect } from "react";
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
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
  const [focus, setFocus] = useState(25 * 60);
  const [pause, setPause] = useState(true);
  const navigation = useNavigation();

  function toMenu() {
    navigation.navigate("Menu");
  }

  useEffect(() => {
    const initiate = setInterval(() => {
      if (!pause) {
        setFocus((f) => f - 1);
      }
    }, 1000);
    return () => {
      clearInterval(initiate);
    };
  }, [pause]);

  function startFocus() {
    setPause(false);
  }

  function pauseFocus() {
    setPause(true);
  }

  function stopFocus() {
    setPause(true);
    setFocus(25 * 60);
  }

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
          <TouchableOpacity onPress={toMenu}>
            <FontAwesome5 name="cog" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.display}>
          <Text style={[styles.textDisplay, { fontFamily: "Quantico-Bold" }]}>
            {`${Math.floor(focus / 60)}:${("00" + Math.floor(focus % 60)).slice(
              -2
            )}`}
          </Text>
        </View>
        <View style={styles.controls}>
          <TouchableOpacity
            style={[styles.controlBtn, { backgroundColor: "#33FE94" }]}
            onPress={startFocus}
          >
            <FontAwesome5 name="play" size={35} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.controlBtn, { backgroundColor: "#FFB053" }]}
            onPress={pauseFocus}
          >
            <FontAwesome5 name="pause" size={35} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.controlBtn, { backgroundColor: "#FF5B5E" }]}
            onPress={stopFocus}
          >
            <FontAwesome5 name="stop" size={35} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}
