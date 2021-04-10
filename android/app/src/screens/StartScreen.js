/* eslint-disable prettier/prettier */
import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Pressable,
} from "react-native";

import config from "../config/config";

function StartScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/belval.jpg")}
    >
      <Image
        style={styles.logo}
        source={require("../assets/esch2022.jpg")}
      ></Image>

      <Pressable
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [
              {
                name: "Main",
              },
            ],
          })
        }
        style={styles.button}
        android_ripple={{ color: config.START_BUTTON_RIPPLE_COLOR }}
      >
        <Text style={{ alignSelf: "center" }}>Start!!</Text>
      </Pressable>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignContent: "center",
  },
  button: {
    backgroundColor: config.START_BUTTON_BG_COLOR,
    borderRadius: 8,
    position: "absolute",
    alignSelf: "center",
    width: "70%",
    bottom: 70,
    padding: 10,
  },
  logo: {
    height: "33%",
    width: "100%",
  },
});

export default StartScreen;
