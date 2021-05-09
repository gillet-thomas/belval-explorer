import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Modal,
  Button,
} from "react-native";

class MainScreen extends Component {
  state = {
    isVisible: false,
    waypoints: {
      category: "Science",
      answers: [null, "500", "1000", "1500"],
      correctAnswer: 1,
      information: "MSA has 20 classrooms",
      question: "Number of floors in MSA ?",
      title: "MSA",
    },
    answered: false,
  };

  checkValidity(userInput) {
    if (this.state.waypoints != null) {
      var correctAnswer = this.state.waypoints.correctAnswer;
      if (this.state.waypoints.answers[correctAnswer] === userInput)
        return true;
      return false;
    } else {
      return null;
    }
  }

  displayModal(show) {
    this.setState({ isVisible: show });
  }

  render() {
    return (
      <View style={styles.container}>
        <Modal
          animationType={"slide"}
          transparent={false}
          visible={this.state.isVisible}
        >
          <Image
            source={require("../assets/BuildingBelval.jpg")}
            style={styles.image}
          />

          <Text style={styles.information}>
            {this.state.waypoints.information.toUpperCase()}
          </Text>

          <TouchableHighlight
            activeOpacity={0.9}
            style={styles.appButtonContainer}
          >
            <Text style={styles.appButtonText}>
              {this.state.waypoints.question}
            </Text>
          </TouchableHighlight>

          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.buttonAnswer}
            onPress={() => {
              this.checkValidity (this.state.waypoints.answers[1]);
            }}
          >
            <Text style={styles.appButtonTextAnswer}>
              {this.state.waypoints.answers[1]}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.buttonAnswer}
            onPress={() => {
              this.checkValidity(this.state.waypoints.answers[2]);
            }}
          >
            <Text style={styles.appButtonTextAnswer}>
              {this.state.waypoints.answers[2]}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            style={styles.buttonAnswer}
            onPress={() => {
              this.checkValidity(this.state.waypoints.answers[3]);
            }}
          >
            <Text style={styles.appButtonTextAnswer}>
              {this.state.waypoints.answers[3]}
            </Text>
          </TouchableOpacity>

          <Text
            style={styles.closeText}
            onPress={() => {
              this.displayModal(!this.state.isVisible);
            }}
          >
            {" "}
            Exit{" "}
          </Text>
        </Modal>

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.displayModal(true);
          }}
        >
          <Text style={styles.buttonText}>WAYPOINTS</Text>
        </TouchableOpacity>
      </View>
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
    marginTop: "20%",
    marginBottom: -20,
    width: "100%",
    height: "35%",
  },
  information: {
    fontSize: 25,
    marginBottom: "13%",
    padding: 50,
    marginTop: 1,
    marginLeft: 16,
    fontWeight: "bold",
  },
  question: {
    fontSize: 24,
    marginBottom: "0%",
    padding: 40,
  },
  closeText: {
    fontSize: 34,
    color: "#00479e",
    textAlign: "center",
    marginTop: "10%",
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
    backgroundColor: "#68a0cf",
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
});

export default MainScreen;
