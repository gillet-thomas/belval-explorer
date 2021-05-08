import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AboutMapButton from '../components/AboutMapButton';

import config from '../config/config';

class AboutScreen extends Component {
  render() {
    return (
      <View style={styles.background}>
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
          {'\u2022 ' + config.EMAIL_RAYAN}
        </Text>
        <Text style={{fontWeight: 'bold'}}>
          {'\u2022 ' + config.EMAIL_HUGO}
        </Text>
        <Text style={{fontWeight: 'bold'}}>
          {'\u2022 ' + config.EMAIL_GILLES}
        </Text>
        <Text style={{fontWeight: 'bold'}}>
          {'\u2022 ' + config.EMAIL_THOMAS}
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
    backgroundColor: config.ABOUT_PAGE_BACKGROUND_COLOR,
  },
  contact: {
    width: '80%',
    fontSize: 18,
    textAlign: 'center',
    paddingBottom: 5,
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
