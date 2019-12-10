import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import ImageGrid from '../components/image-grid';
import SearchBar from '../components/search-bar';
import {useStateValue} from '../store/reducer';
import {getTrendingWallpapers} from '../utils/fetch-api';
import {SET_TRENDING_WALLPAPERS} from '../store/state';

const Trending = props => {
  const [loading, setLoading] = React.useState(false);
  const [{trendingWallpapers}, dispatch] = useStateValue();

  React.useEffect(() => {
    getTrendingWallpapers().then(res => {
      setLoading(true);
      if (res.error) return console.log('error');
      dispatch({
        type: SET_TRENDING_WALLPAPERS,
        trendingWallpapers: res,
      });
      setLoading(false);
    });
  }, [dispatch]);

  return (
    <>
      <SearchBar />
      {loading && <ActivityIndicator color="blue" size={38} />}
      {Object.keys(trendingWallpapers).length !== 0 && (
        <ImageGrid
          trendingWallpapers={trendingWallpapers}
          navigation={props.navigation}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
});

export default Trending;
