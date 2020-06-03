import React from "react";
import {
  ImageBackground,
  StatusBar,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useFonts } from "@use-expo/font";
import { AppLoading } from "expo";
import { FontAwesome5 } from "@expo/vector-icons";

import styles from "./styles";
import background from "../../assets/img/bg.png";

let customFonts = {
  "Quantico-Regular": require("../../assets/fonts/Quantico-Regular.ttf"),
  "Quantico-Bold": require("../../assets/fonts/Quantico-Bold.ttf"),
};

export default function Menu() {
  const navigation = useNavigation();

  function toHome() {
    navigation.navigate("Home");
  }

  [isLoaded] = useFonts(customFonts);

  if (!isLoaded) {
    return <AppLoading />;
  }

  return (
    <ImageBackground source={background} style={styles.imgBg}>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="transparent"
        translucent={true}
        networkActivityIndicatorVisible={true}
      />
      <View style={styles.container}>
        <View style={styles.topBar}>
          <TouchableOpacity onPress={toHome}>
            <FontAwesome5 name="arrow-left" size={40} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.inputs}>
          <View style={styles.focusInput}>
            <Text style={[styles.focusTitle, { fontFamily: "Quantico-Bold" }]}>
              Focus Time:
            </Text>
            <View style={styles.focusBar}>
              <TouchableOpacity style={styles.focusDown}>
                <FontAwesome5 name="minus" size={20} color="#fff" />
              </TouchableOpacity>
              <View style={styles.focusValue}></View>
              <TouchableOpacity style={styles.focusUp}>
                <FontAwesome5 name="plus" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.relaxInput}>
            <Text style={[styles.relaxTitle, { fontFamily: "Quantico-Bold" }]}>
              Focus Time:
            </Text>
            <View style={styles.relaxBar}>
              <TouchableOpacity style={styles.relaxDown}>
                <FontAwesome5 name="minus" size={20} color="#fff" />
              </TouchableOpacity>
              <View style={styles.relaxValue}></View>
              <TouchableOpacity style={styles.relaxUp}>
                <FontAwesome5 name="plus" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}
