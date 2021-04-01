import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image, Modal } from "react-native";

class MainScreen extends Component {
  //Initiating the state of the modal
  state = {
    isVisible: false
  };

  // If we want to hide the --> Show modal
  displayModal(show){
    this.setState({ isVisible: show })
  }

  render() {
    return (
      <View style = {styles.container}>
        <Modal 
          animationType = {"slide"}
          transparent = {false}
          visible = {this.state.isVisible}
          onRequestClose = {()=> {
            Alert.alert("Here modal has been closed (debug)")
          }}>

            <Image 
              source = {require('../assets/BuildingBelval.jpg')}
              style = {styles.image}/>

              <Text style = {styles.text}>
                This is the pop up we are going to show, with explanation about building.
                 Maybe we could implement the quizz here?</Text>

              <Text style = {styles.closeText}
              onPress = {()=> {
                this.displayModal(!this.state.isVisible);}}>Close Modal</Text>
          </Modal>

        <TouchableOpacity style = {styles.button}
          onPress = {()=> {
            this.displayModal(true)
          }}>
            <Text style = {styles.buttonText}>Waypoints pop up :)</Text>
          </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    padding: 25,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    display: 'flex',
    height: 60,
    borderRadius: 6,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#2AC062',
    shadowColor: '#2AC062',
    shadowOpacity: 0.5,
    shadowOffset: { 
      height: 10, 
      width: 0
    },
  shadowRadius: 25
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 22,
  },
  image: {
    marginTop: 150,
    marginBottom: 10,
    width: '100%',
    height: 350,
  },
  text: {
    fontSize: 24,
    marginBottom: 30,
    padding: 40,
  },
  closeText: {
    fontSize: 24,
    color: '#00479e',
    textAlign: 'center',
  }
});

export default MainScreen;
