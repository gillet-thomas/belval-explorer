import React, {Component} from 'react';
import {View, Text, StyleSheet, Linking, Image} from 'react-native';
import AboutMapButton from '../components/AboutMapButton';

class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.background}>
        <Image
          style={styles.logo}
          source={require('../assets/logo.png')}></Image>
        <Text style={styles.title}>About us</Text>
        <Text style={styles.about}>
          This project was created in the frame of the project "Esch 2022:
          European Capital of Culture 2022". Our aim was to make you discover
          the beautiful campus of the University of Luxembourg through this app.
        </Text>
        <Text style={styles.contact}>
          If you have any questions, please find our email addresses below.
        </Text>
        <Text style={{fontWeight: 'bold'}}>
          {'\u2022 ' + 'rayan.rafdy@gmail.com'}
        </Text>
        <Text style={{fontWeight: 'bold'}}>
          {'\u2022 ' + 'hugo.cossa@hotmail.fr'}
        </Text>
        <Text style={{fontWeight: 'bold'}}>
          {'\u2022 ' + 'gilchen96@gmail.com'}
        </Text>
        <Text style={{fontWeight: 'bold'}}>
          {'\u2022 ' + 'gillet.thomas43@gmail.com'}
        </Text>
        <Text
          style={styles.link}
          onPress={() => Linking.openURL('https://esch2022.lu/en/')}>
          Esch2022 event
        </Text>
        <AboutMapButton
          style={{top: 20, left: 40}}
          navigation={this.props.navigation}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  about: {
    width: '80%',
    paddingBottom: 30,
    fontSize: 20,
    textAlign: 'left',
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
  },
  contact: {
    width: '80%',
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 5,
  },
  link: {
    color: 'blue',
    fontSize: 20,
    paddingTop: 20,
    textDecorationLine: 'underline',
  },
  title: {
    fontSize: 30,
    color: '#474747',
    fontFamily: 'Arial',
    fontWeight: 'bold',
    paddingBottom: 10,
    textAlign: 'left',
  },
});

export default AboutScreen;
