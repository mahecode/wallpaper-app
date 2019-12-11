import React from 'react';
import {StatusBar} from 'react-native';
import MainApp from './src/main-app';
import {StateProvider} from './src/store/reducer';
import {initialState, reducer} from './src/store/state';

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <StatusBar backgroundColor="#F0F0F0" />
      <MainApp />
    </StateProvider>
  );
};

export default App;
