import React from 'react';
import {StatusBar} from 'react-native';
import MainApp from './src/main-app';
import {StateProvider} from './src/store/reducer';
import {initialState, reducer} from './src/store/state';
import SplashScreen from 'react-native-splash-screen'

const App = () => {
  React.useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <StatusBar backgroundColor="#F0F0F0" />
      <MainApp />
    </StateProvider>
  );
};

export default App;
