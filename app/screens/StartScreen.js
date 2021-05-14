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
      source={require("../assets/MainScreenBackground.jpg")}
    >
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
        <Text style={styles.textButton}>Travel</Text>
      </Pressable>
      <Text style={styles.introduction}>
        Catch phrase
      </Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignContent: "center",
    width: "100%",
  },
  button: {
    backgroundColor: config.START_BUTTON_BG_COLOR,
    borderRadius: 20,
    position: "absolute",
    alignSelf: "center",
    width: "50%",
    bottom: "16%",
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "#ffff",
  },
  textButton: {
    alignSelf: "center",
    color: "#ffff",
    fontSize: 30,
    fontWeight: "bold",
  },
  introduction: {
    alignContent: "center",
    justifyContent: "center",
    color: "white",
    justifyContent: "center",
    alignContent: "center",
    paddingHorizontal: 100,
    paddingVertical: 500,
    fontSize: 50,
  },
});

export default StartScreen;
