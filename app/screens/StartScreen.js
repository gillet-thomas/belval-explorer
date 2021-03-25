import React from "react";
import {
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Pressable,
} from "react-native";

function StartScreen(props) {
  handlePress = () => {
    console.log("pressed");
  };

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
        onPress={handlePress}
        style={styles.button}
        android_ripple={{ color: "#191516" }}
      >
        <Text style={{ alignSelf: "center" }}>Start!</Text>
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
    backgroundColor: "#35B7C0",
    borderRadius: 8,
    position: "absolute",
    alignSelf: "center",
    width: "70%",
    bottom: 50,
    padding: 10,
  },
  logo: {
    height: "33%",
    width: "100%",
  },
});

export default StartScreen;
