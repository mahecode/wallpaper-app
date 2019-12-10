import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import SearchBar from '../components/search-bar';
import {useStateValue} from '../store/reducer';
import {getCategorizedWallpaper} from '../utils/fetch-api';
import {CustomAlert} from '../components/custom-alert';
import ImageGrid from '../components/image-grid';
import {SET_CATEGORY_WALLPAPERS} from '../store/state';

const CategoryWallpaer = props => {
  const [loading, setLoading] = React.useState(false);
  const [{categorizedWallpapers}, dispatch] = useStateValue();
  const {
    navigation: {
      state: {
        params: {query},
      },
    },
  } = props;

  React.useEffect(() => {
    getCategorizedWallpaper(query).then(res => {
      setLoading(true);
      if (res.error) return CustomAlert({title: 'Error', message: res.error});
      dispatch({type: SET_CATEGORY_WALLPAPERS, categorizedWallpapers: res});
      setLoading(false);
    });
  }, [dispatch, query]);
  return (
    <>
      <SearchBar />
      {loading && <ActivityIndicator color="blue" size={38} />}
      {Object.keys(categorizedWallpapers).length !== 0 && (
        <ImageGrid
          trendingWallpapers={categorizedWallpapers}
          navigation={props.navigation}
          query={query}
        />
      )}
    </>
  );
};

export default CategoryWallpaer;
