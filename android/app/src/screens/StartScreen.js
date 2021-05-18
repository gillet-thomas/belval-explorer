import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Pressable,
} from "react-native";

import firebase from '../config/firebaseConfig';
import config from "../config/config";

class StartScreen extends Component {
  state = {
    quote: null,
  }
  componentDidMount() {
    firebase
      .database()
      .ref()
      .child('quotes')
      .get()
      .then(snapshot => {
        if (snapshot.exists()) {
          var data = [];
          snapshot.forEach(entry => { data.push(entry) });
          const quotesNumber = data.length;
          const randomQuote = Math.floor(Math.random() * quotesNumber);
          this.setState({ quote: JSON.stringify(data[randomQuote]) });
        }
      });
  }

  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/MainScreenBackground.jpg")}
      >
        <Image
          style={styles.logo}
          source={require("../assets/logo.png")}
        ></Image>


        {/* When start button pressed, remove this page from stack navigator and go to main page */}
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
          <Text style={styles.textButton}>Explore</Text>
        </Pressable>
        <Text style={styles.introduction}>{this.state.quote}</Text>
      </ImageBackground>
    );
  }
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
    position: "absolute",
    alignSelf: "center",
    bottom: "40%",
    padding: 10,
    color: "white",
    fontSize: 40,
  },
  logo: {
    position: "absolute",
    alignSelf: "center",
    height: "30%"
  }
});

export default StartScreen;
