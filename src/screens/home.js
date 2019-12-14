import React, {useEffect, useState} from 'react';
import {View, ScrollView, ActivityIndicator, Alert} from 'react-native';
import SearchBar from '../components/search-bar';
import SnapCarousal from '../components/snap-carousal/snap-carousal';
import {getWallpapers} from '../utils/fetch-api';
import {useStateValue} from '../store/reducer';
import {SET_WALLPAPERS} from '../store/state';
import Admob from '../components/admob';

const Home = props => {
  const [loading, setLoading] = useState(false);
  const [{wallpapers}, dispatch] = useStateValue();
  useEffect(() => {
    setLoading(true);
    getWallpapers()
      .then(res => {
        console.log('in useEffect');
        if (res.error) return Alert.alert('Error', res.error);
        dispatch({type: SET_WALLPAPERS, wallpapers: res});
      })
      .then(res => setLoading(false));
  }, [dispatch]);
  return (
    <ScrollView style={{flex: 1}}>
      <SearchBar navigation={props.navigation} />
      <Admob />
      {loading && <ActivityIndicator color="blue" size={48} />}
      {Object.keys(wallpapers).length !== 0 && (
        <View>
          <SnapCarousal
            photos={wallpapers.photos}
            navigation={props.navigation}
            page={wallpapers.page}
          />
        </View>
      )}
    </ScrollView>
  );
};

export default Home;
