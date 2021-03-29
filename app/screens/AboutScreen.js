import React from "react";
import { View, Text, StyleSheet } from "react-native";

import config from "../config/config";

function AboutScreen() {
  return (
    <View style={styles.background}>
      <Text style={styles.title}>About us</Text>
      <Text style={styles.about}>
        This project was created in the frame of the project "Esch 2022:
        European Capital of Culture 2022". Our aim was to make you discover the
        beautiful campus of the University of Luxembourg through this app.
      </Text>
      <Text style={styles.contact}>
        May you have any question or remark please do not hesitate to contact us
      </Text>
      <Text style={{ fontWeight: "bold" }}>
        {"\u2022 " + config.EMAIL_RAYAN}
      </Text>
      <Text style={{ fontWeight: "bold" }}>
        {"\u2022 " + config.EMAIL_HUGO}
      </Text>
      <Text style={{ fontWeight: "bold" }}>
        {"\u2022 " + config.EMAIL_GILLES}
      </Text>
      <Text style={{ fontWeight: "bold" }}>
        {"\u2022 " + config.EMAIL_THOMAS}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  about: {
    width: "80%",
    paddingBottom: 30,
    fontSize: 20,
    textAlign: "center",
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: config.ABOUT_PAGE_BACKGROUND_COLOR,
  },
  contact: {
    width: "85%",
    fontSize: 18,
    textAlign: "center",
    paddingBottom: 5,
  },
  title: {
    fontSize: 30,
    textDecorationLine: "underline",
    fontWeight: "bold",
    paddingBottom: 10,
  },
});

export default AboutScreen;
