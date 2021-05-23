import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
  Image,
  Modal,
  Alert,
  View,
  Appearance,
} from 'react-native';

export default class MapScreen extends Component {
  state = {
    bgColor1: '#68a0cf',
    bgColor2: '#68a0cf',
    bgColor3: '#68a0cf',
    answeredSubmitted: false,
  };

  displayInformation() {
    Alert.alert('Did you know ?', this.props.modal.information, [
      { text: 'Close', style: 'Close' },
    ]);
  }

  checkValidity(userInput) {
    if (this.state.answeredSubmitted == false) {
      //Display correct answer in green
      this.setState({ ['bgColor' + this.props.modal.correctAnswer]: 'green' });

      //If the user was wrong display his answer in red
      if (this.props.modal.correctAnswer !== userInput) {
        this.setState({ ['bgColor' + userInput]: 'red' });
      }
      this.state.answeredSubmitted = true;
    }
  }

  render() {
    const images = {
      llc: require('../assets/llc.jpg'),
      msa: require('../assets/msa.jpg'),
      foodhouse: require('../assets/foodhouse.jpg'),
      maisonartetudiants: require('../assets/maisonartetudiants.jpg'),
      foodlab: require('../assets/foodlab.jpg'),
      rockhal: require('../assets/rockhal.jpg'),
      list: require('../assets/list.jpg'),
      lcsb: require('../assets/lcsb.jpg'),
      hautsfourneaux: require('../assets/hautsfourneaux.jpg'),
      belvalplaza: require('../assets/belvalplaza.jpg'),
      maisonnombre: require('../assets/maisonnombre.jpg'),
    };

    return (
      <Modal
        animationType={'slide'}
        transparent={false}
        visible={this.props.isVisible}
        style={[styles.container, { backgroundColor: 'rgba(0,0,0,0.5)' }]}>
        <View style={styles.view}>

          <Text style={styles.title}>{this.props.title}</Text>
          <Image source={images[this.props.modal.image]} style={styles.image} />

          <TouchableHighlight
            activeOpacity={0.9}
            style={styles.questionContainer}>
            <Text style={styles.question}>{this.props.modal.question}</Text>
          </TouchableHighlight>

          <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.buttonAnswer, { backgroundColor: this.state.bgColor1 }]}
            onPress={() => {
              this.checkValidity(1);
              this.displayInformation();
            }}>
            <Text style={styles.appButtonTextAnswer}>{this.props.modal.answers[1]}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.buttonAnswer, { backgroundColor: this.state.bgColor2 }]}
            onPress={() => {
              this.checkValidity(2);
              this.displayInformation();
            }}>
            <Text style={styles.appButtonTextAnswer}>{this.props.modal.answers[2]}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.9}
            style={[styles.buttonAnswer, { backgroundColor: this.state.bgColor3 }]}
            onPress={() => {
              this.checkValidity(3);
              this.displayInformation();
            }}>
            <Text style={styles.appButtonTextAnswer}>{this.props.modal.answers[3]}</Text>
          </TouchableOpacity>

          <Text style={styles.closeText} onPress={this.props.hideModal}>Exit</Text>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  image: {
    marginTop: '5%',
    marginBottom: '25%',
    width: '100%',
    height: '35%',
  },
  questionContainer: {
    elevation: 30,
    backgroundColor: '#009688',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    textAlign: 'center',
    padding: 30,
    marginTop: -80,
    marginLeft: 30,
    marginRight: 30,
  },
  question: {
    fontSize: 18,
    marginBottom: '0%',
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  closeText: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: '5%',
    fontWeight: 'bold',
    color: Appearance.getColorScheme() === 'dark' ? 'white' : 'blue',
  },
  buttonAnswer: {
    elevation: 30,
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 12,
    textAlign: 'center',
    padding: 30,
    marginTop: 20,
    marginLeft: 100,
    marginRight: 100,
    borderColor: 'black',
  },
  appButtonTextAnswer: {
    fontSize: 20,
    color: '#000000',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  title: {
    marginTop: '5%',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    color: Appearance.getColorScheme() === 'dark' ? 'white' : 'black',
  },
  view: {
    flex: 1,
    backgroundColor: Appearance.getColorScheme() === 'dark' ? '#2f3948' : 'white',
  },
});
