import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground,
  Image,
  Text,
  Pressable,
  LogBox,
} from 'react-native';

import firebase from '../config/firebaseConfig';

LogBox.ignoreLogs(['Setting a timer']);

class StartScreen extends Component {
  state = {
    quote: null,
  };
  componentDidMount() {
    firebase
      .database()
      .ref()
      .child('quotes')
      .get()
      .then(snapshot => {
        if (snapshot.exists()) {
          var data = [];
          snapshot.forEach(entry => {
            data.push(entry);
          });
          const quotesNumber = data.length;
          const randomQuote = Math.floor(Math.random() * quotesNumber);
          this.setState({ quote: JSON.stringify(data[randomQuote]) });
        }
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    const { navigation } = this.props;
    return (
      <ImageBackground
        style={styles.background}
        source={require('../assets/MainScreenBackground.jpg')}>
        <Image
          style={styles.logo}
          source={require('../assets/logo_white.png')}></Image>

        {/* When start button pressed, remove this page from stack navigator and go to main page */}
        <Pressable
          onPress={() =>
            navigation.reset({
              index: 0,
              routes: [
                {
                  name: 'Main',
                },
              ],
            })
          }
          style={styles.button}
          android_ripple={{ color: '#191516' }}>
          <Text style={styles.textButton}>Explore</Text>
        </Pressable>
        <Text style={styles.quote}>{this.state.quote}</Text>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignContent: 'center',
    width: '100%',
  },
  button: {
    backgroundColor: '#35B7C0',
    borderRadius: 20,
    position: 'absolute',
    alignSelf: 'center',
    width: '50%',
    bottom: '16%',
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 2,
    borderColor: '#ffff',
  },
  textButton: {
    alignSelf: 'center',
    color: '#ffff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  quote: {
    position: 'absolute',
    alignSelf: 'center',
    bottom: '40%',
    padding: 20,
    color: 'white',
    fontSize: 35,
  },
  logo: {
    position: 'absolute',
    alignSelf: 'center',
    height: '30%',
    top: -45,
  },
});

export default StartScreen;
