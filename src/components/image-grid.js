import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import {useStateValue} from '../store/reducer';
import {
  getTrendingWallpapers,
  getCategorizedWallpaper,
  getSearchResult,
} from '../utils/fetch-api';
import {
  SET_MORE_TRENDING_WALLPAPERS,
  SET_MORE_CATEGORY_WALLPAPERS,
  SET_MORE_SEARCH_WALLPAPERS,
} from '../store/state';
import {Toast} from './toast';

const {width, height} = Dimensions.get('screen');

class ImageComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      loading: false,
    };
  }
  shouldComponentUpdate(nextProps, nextState) {
    const {navigation} = this.props;
    return navigation !== nextProps.navigation;
  }

  handleImage = () => {
    this.props.navigation.navigate('FullScreen', {
      uri: this.props.large,
      original: this.props.original,
    });
  };

  render() {
    const {loading} = this.state;
    return (
      <View>
        <TouchableHighlight
          style={styles.rowImageStyle}
          onPress={this.handleImage}>
          <Image
            style={loading ? styles.loadingImage : styles.imageStyle}
            source={{uri: this.props.uri}}
            onLoadStart={() => this.setState({loading: true})}
            onLoadEnd={() => this.setState({loading: false})}
          />
        </TouchableHighlight>
      </View>
    );
  }
}

const ImageGrid = props => {
  const [loadMore, setLoadMore] = React.useState(false);
  const [{}, dispatch] = useStateValue();

  const handleNewData = () => {
    if (props.query) {
      setLoadMore(true);
      getCategorizedWallpaper(props.query)
        .then(res => {
          if (res.error) return Toast({message: res.error});
          dispatch({
            type: SET_MORE_CATEGORY_WALLPAPERS,
            categorizedWallpapers: res,
          });
        })
        .then(res => setLoadMore(false));
    }

    if (props.searchQuery) {
      setLoadMore(true);
      getSearchResult(props.searchQuery)
        .then(res => {
          if (res.error) return Toast({message: res.error});
          dispatch({type: SET_MORE_SEARCH_WALLPAPERS, searchWallpapers: res});
        })
        .then(res => setLoadMore(false));
    }

    if (props.trend) {
      setLoadMore(true);
      getTrendingWallpapers()
        .then(res => {
          if (res.error) return Toast({message: res.error});
          dispatch({
            type: SET_MORE_TRENDING_WALLPAPERS,
            trendingWallpapers: res,
          });
        })
        .then(res => setLoadMore(false));
    }
  };

  return (
    <View style={styles.itemContainer}>
      <FlatList
        data={props.trendingWallpapers.photos}
        renderItem={({item}) => (
          <ImageComponent
            uri={item.src.medium}
            large={item.src.large}
            original={item.src.original}
            navigation={props.navigation}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        onEndReached={handleNewData}
        onEndReachedThreshold={0.5}
      />
      {loadMore && <ActivityIndicator size={38} color="blue" />}
    </View>
  );
};

export default ImageGrid;

const styles = StyleSheet.create({
  container: {
    width: width,
    height: height,
  },
  itemContainer: {
    flex: 1,
    alignItems: 'center',
  },
  imageStyle: {
    width: width / 2.5,
    height: 200,
    borderRadius: 25,
  },
  imageContainer: {
    borderRadius: 25,
    padding: 15,
  },
  rowImageStyle: {
    marginRight: 10,
    marginLeft: 10,
    marginBottom: 10,
  },
  loadingImage: {
    width: width / 2.5,
    height: 200,
    borderRadius: 25,
    backgroundColor: 'gray',
  },
});
