import React from 'react';
import FullScreenImage from '../components/full-screen-image';

const FullScreen = props => {
  return (
    <FullScreenImage
      goBack={props.navigation.goBack}
      uri={props.navigation.state.params.uri}
      original={props.navigation.state.params.original}
    />
  );
};

export default FullScreen;
