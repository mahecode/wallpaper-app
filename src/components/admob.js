import React from 'react';
import {AdMobBanner} from 'react-native-admob';
import {ADMOB_AD_ID} from '../utils/constants';

const Admob = props => {
  return (
    <AdMobBanner
      adSize="smartBanner"
      adUnitID={ADMOB_AD_ID}
      testDevices={[AdMobBanner.simulatorId]}
      onAdFailedToLoad={error => console.error(error)}
    />
  );
};

export default Admob;
