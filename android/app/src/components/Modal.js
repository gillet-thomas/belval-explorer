import React, {Component} from 'react';
import {Text, StyleSheet, Image, Modal} from 'react-native';

export default class MapScreen extends Component {
  render() {
    return (
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={this.props.isVisible}>
        <Image
          source={require('../assets/BuildingBelval.jpg')}
          style={styles.image}
        />

        <Text style={styles.text}>
          This is the pop up we are going to show, with explanation about
          building. Maybe we could implement the quizz here?
        </Text>

        <Text style={styles.closeText} onPress={this.props.hideModal}>
          Close Modal
        </Text>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    marginTop: '30%',
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
});
