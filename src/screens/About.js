import React from 'react';
import {View, StyleSheet} from 'react-native';
import List from '../components/list';
import {PRIVACY_POLICY_URL, TERMS_AND_CONDITIONS_URL} from '../utils/constants';
import Admob from '../components/admob';

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
        shareType={true}
      />
      <View style={styles.admob}>
        <Admob />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 20,
  },
  admob: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
});

export default About;
