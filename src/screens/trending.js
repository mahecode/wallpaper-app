import React from 'react';
import {ActivityIndicator} from 'react-native';
import ImageGrid from '../components/image-grid';
import SearchBar from '../components/search-bar';
import {useStateValue} from '../store/reducer';
import {getTrendingWallpapers} from '../utils/fetch-api';
import {SET_TRENDING_WALLPAPERS} from '../store/state';
import Admob from '../components/admob';

const Trending = props => {
  const [loading, setLoading] = React.useState(false);
  const [{trendingWallpapers}, dispatch] = useStateValue();

  React.useEffect(() => {
    setLoading(true);
    getTrendingWallpapers().then(res => {
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
      <SearchBar navigation={props.navigation} />
      {loading && <ActivityIndicator color="blue" size={38} />}
      {Object.keys(trendingWallpapers).length !== 0 && (
        <ImageGrid
          trend={true}
          trendingWallpapers={trendingWallpapers}
          navigation={props.navigation}
        />
      )}
      <Admob />
    </>
  );
};

export default Trending;
