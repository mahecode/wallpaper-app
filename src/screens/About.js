import React from 'react';
import {View, StyleSheet} from 'react-native';
import List from '../components/list';
import {PRIVACY_POLICY_URL, TERMS_AND_CONDITIONS_URL} from '../utils/constants';

const About = props => {
  return (
    <View style={styles.container}>
      <List listName="About us" navigation={props.navigation} />
      <List listName="Privacy Policy" url={PRIVACY_POLICY_URL} />
      <List listName="Terms and Conditions" url={TERMS_AND_CONDITIONS_URL} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
});

export default About;
