import React from 'react';
import {View, StyleSheet} from 'react-native';
import List from '../components/list';
import {PRIVACY_POLICY_URL, TERMS_AND_CONDITIONS_URL} from '../utils/constants';

const About = props => {
  return (
    <View style={styles.container}>
      <List
        listName="About us"
        iconName="information"
        navigation={props.navigation}
      />
      <List
        listName="Privacy Policy"
        iconName="file-document-box-multiple"
        url={PRIVACY_POLICY_URL}
      />
      <List
        listName="Terms and Conditions"
        iconName="cash-register"
        url={TERMS_AND_CONDITIONS_URL}
      />
       <List
        listName="Invite your friends"
        iconName="share-variant"
        url={TERMS_AND_CONDITIONS_URL}
      />
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
