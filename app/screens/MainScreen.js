import React, { Component } from "react";
import { View, Text } from "react-native";

import firebase from "../config/firebaseConfig";

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    firebase
      .database()
      .ref()
      .child("Waypoint")
      .get()
      .then((snapshot) => {
        if (snapshot.exists()) {
          var data = [];
          snapshot.forEach((entry) => {
            data.push({
              key: entry.key,
              value: entry.value,
            });
          });
          console.log(data);
        } else {
          console.log("No data available");
        }
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text> MainScreen </Text>
      </View>
    );
  }
}

export default MainScreen;
