import React, { Component } from 'react';
import { Text, StyleSheet, Image, Modal } from 'react-native';

export default class MapScreen extends Component {
  render() {
    return (
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={this.props.isVisible}
        style={styles.container}>

        <Text style={styles.title}>{this.props.title}</Text>

        <Image
          source={require('../assets/BuildingBelval.jpg')}
          style={styles.image}
        />

        <Text>Question: {this.props.modal.question}</Text>
        <Text>Answers: {this.props.modal.answers}</Text>
        <Text>Right answer: {this.props.modal.correctAnswer}</Text>
        <Text>Information: {this.props.modal.information}</Text>

        <Text style={styles.closeText} onPress={this.props.hideModal}>Close Modal</Text>

      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    marginTop: '20%',
    marginBottom: '5%',
    width: '100%',
    height: '35%',
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
  },
  title: {
    marginTop: '10%',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: "bold",
    textDecorationLine: 'underline'
  },
  container: {
    flex: 1,
    alignContent: "center",
  }
});
