import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Modal,
  Alert
} from "react-native";

export default class MapScreen extends Component {
  state = {
    bgColor1: '#68a0cf',
    bgColor2: '#68a0cf',
    bgColor3: '#68a0cf',
    answeredSubmitted: false
  };

  displayInformation() {
    Alert.alert(
      "Did you know ?", this.props.modal.information, [{ text: "Close", style: "Close", }]
    );
  }

  checkValidity(userInput) {
    if (this.state.answeredSubmitted == false) {
      //Display correct answer in green
      this.setState({ ["bgColor" + this.props.modal.correctAnswer]: "green" });

      //If the user was wrong display his answer in red
      if (this.props.modal.correctAnswer !== userInput) {
        this.setState({ ["bgColor" + userInput]: "red" });
      }
      this.state.answeredSubmitted = true;
    }
  }

  render() {
    return (
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={this.props.isVisible}
        style={styles.container} >

        <Text style={styles.title}>{this.props.title}</Text>

        <Image source={require("../assets/BuildingBelval.jpg")} style={styles.image} />

        <TouchableHighlight activeOpacity={0.9} style={styles.appButtonContainer} >
          <Text style={styles.appButtonText}>
            {this.props.modal.question}
          </Text>
        </TouchableHighlight>

        <TouchableOpacity activeOpacity={0.9} style={[styles.buttonAnswer, { backgroundColor: this.state.bgColor1 }]}
          onPress={() => { this.checkValidity(1); this.displayInformation(); }}
        >
          <Text style={styles.appButtonTextAnswer}>
            {this.props.modal.answers[1]}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9} style={[styles.buttonAnswer, { backgroundColor: this.state.bgColor2 }]}
          onPress={() => { this.checkValidity(2); this.displayInformation(); }}
        >
          <Text style={styles.appButtonTextAnswer}>
            {this.props.modal.answers[2]}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.9} style={[styles.buttonAnswer, { backgroundColor: this.state.bgColor3 }]}
          onPress={() => { this.checkValidity(3); this.displayInformation(); }}
        >
          <Text style={styles.appButtonTextAnswer}>
            {this.props.modal.answers[3]}
          </Text>
        </TouchableOpacity>

        <Text style={styles.closeText} onPress={this.props.hideModal}>Exit</Text>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    display: "flex",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    backgroundColor: "#2278FF",
    shadowColor: "#2278FF",
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowRadius: 25,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 25,
  },
  image: {
    marginTop: "5%",
    marginBottom: "30%",
    width: "100%",
    height: "35%",
  },
  question: {
    fontSize: 24,
    marginBottom: "0%",
    padding: 40,
  },
  closeText: {
    fontSize: 18,
    color: "#00479e",
    textAlign: "center",
    marginTop: "5%",
    fontWeight: "bold",
  },
  appButtonContainer: {
    elevation: 30,
    backgroundColor: "#009688",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    textAlign: "center",
    padding: 30,
    marginTop: -80,
    marginLeft: 40,
    marginRight: 40,
  },
  buttonAnswer: {
    elevation: 30,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    textAlign: "center",
    padding: 30,
    marginTop: 20,
    marginLeft: 100,
    marginRight: 100,
    borderColor: "black",
  },
  appButtonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  appButtonTextAnswer: {
    fontSize: 20,
    color: "#000000",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  title: {
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: "bold",
    textDecorationLine: 'underline'
  },
});