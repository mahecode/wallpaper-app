import React from 'react';
import {View, Text} from 'react-native';
import FullScreenImage from '../components/full-screen-image';

const FullScreen = props => {
  console.log(props);
  return (
    <FullScreenImage
      goBack={props.navigation.goBack}
      uri={props.navigation.state.params.uri}
    />
  );
};

export default FullScreen;
