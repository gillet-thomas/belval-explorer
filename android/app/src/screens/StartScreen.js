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
          this.setState({ quotes: data });

          const quotesNumber = this.state.quotes.length
          const randomQuote = Math.floor(Math.random() * quotesNumber)
          console.log(this.state.quotes[randomQuote])
        }
      });
  }

  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground
        style={styles.background}
        source={require("../assets/belval.jpg")}
      >
        <Image
          style={styles.logo}
          source={require("../assets/esch2022.jpg")}
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
          <Text style={{ alignSelf: "center" }}>Start!!</Text>
        </Pressable>
      </ImageBackground>
    );
  }
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
