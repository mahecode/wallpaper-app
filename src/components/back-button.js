import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export const CustomBackButton = props => {
  return (
    <TouchableOpacity
      onPress={() => props.goBack()}
      style={[
        styles.iconContainer,
        // eslint-disable-next-line react-native/no-inline-styles
        {backgroundColor: props.white ? 'white' : 'black'},
      ]}>
      <Ionicons name="ios-arrow-back" size={30} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    height: 50,
    width: 50,
    opacity: 0.5,
    position: 'absolute',
    zIndex: 2,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginVertical: 20,
  },
});
