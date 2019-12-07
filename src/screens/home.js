import React from 'react';
import {View, ScrollView} from 'react-native';
import SearchBar from '../components/search-bar';
import SnapCarousal from '../components/snap-carousal/snap-carousal';

const Home = props => {
  return (
    <ScrollView style={{flex: 1}}>
      <SearchBar />
      <View>
        <SnapCarousal />
      </View>
    </ScrollView>
  );
};

export default Home;
