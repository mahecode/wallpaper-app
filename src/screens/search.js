import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {getSearchResult} from '../utils/fetch-api';
import {Toast} from '../components/toast';
import {useStateValue} from '../store/reducer';
import {SET_SEARCH_WALLPAPERS} from '../store/state';
import SearchBar from '../components/search-bar';
import ImageGrid from '../components/image-grid';

const Search = props => {
  const [loading, setLoading] = React.useState(false);
  const {
    navigation: {
      state: {
        params: {query},
      },
    },
  } = props;

  const [{searchWallpapers}, dispatch] = useStateValue();

  React.useEffect(() => {
    setLoading(true);
    if (query) {
      getSearchResult(query).then(res => {
        setLoading(true);
        if (res.error) return Toast({message: res.error});
        dispatch({type: SET_SEARCH_WALLPAPERS, searchWallpapers: res});
        setLoading(false);
      });
    }
  }, [dispatch, query]);

  return (
    <>
      <SearchBar navigation={props.navigation} />
      {loading && <ActivityIndicator color="blue" size={38} />}
      {Object.keys(searchWallpapers).length !== 0 && (
        <ImageGrid
          searchQuery={query}
          trendingWallpapers={searchWallpapers}
          navigation={props.navigation}
        />
      )}
    </>
  );
};

export default Search;
