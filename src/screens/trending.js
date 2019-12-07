import React from 'react';
import {View, StyleSheet, FlatList, ScrollView} from 'react-native';
import ImageGrid from '../components/image-grid';
import SearchBar from '../components/search-bar';

const Trending = props => {
  return (
    <>
      <SearchBar />
      <ImageGrid navigation={props.navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Trending;
