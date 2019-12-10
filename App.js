import React from 'react';
import MainApp from './src/main-app';
import {StateProvider} from './src/store/reducer';
import {initialState, reducer} from './src/store/state';

const App = () => {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <MainApp />
    </StateProvider>
  );
};

export default App;
