import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {CustomBackButton} from '../components/back-button';

const Info = props => {
  return (
    <View style={styles.container}>
      <CustomBackButton goBack={props.navigation.goBack} />
      <Text style={styles.header}>About this app</Text>
      <Text style={styles.para}>
        Blur HD wallpapers provides you with whole new bunch of wallpapers from
        the 1M+ collection of photos which are updated daily.
      </Text>
      <Text style={styles.para}>
        {' '}
        You will experience the brand new and aesthetic wallpapers based on your
        choice.
      </Text>
    </View>
  );
};

export default Info;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginHorizontal: 20,
    paddingTop: 30,
  },
  header: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  para: {
    fontSize: 17,
    paddingTop: 20,
  },
});
