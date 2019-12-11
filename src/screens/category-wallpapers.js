import React from 'react';
import {ActivityIndicator} from 'react-native';
import SearchBar from '../components/search-bar';
import {useStateValue} from '../store/reducer';
import {getCategorizedWallpaper} from '../utils/fetch-api';
import ImageGrid from '../components/image-grid';
import {SET_CATEGORY_WALLPAPERS} from '../store/state';
import {Toast} from '../components/toast';

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
    dispatch({type: SET_CATEGORY_WALLPAPERS, categorizedWallpapers: {}});
    setLoading(true);
    getCategorizedWallpaper(query)
      .then(res => {
        if (res.error) return Toast({message: res.error});
        dispatch({type: SET_CATEGORY_WALLPAPERS, categorizedWallpapers: res});
      })
      .then(res => setLoading(false));
  }, [dispatch, query]);
  return (
    <>
      <SearchBar navigation={props.navigation} />
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
