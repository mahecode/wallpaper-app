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
import {IMAGE_ARRAY} from '../utils/constants';
import {WallpaperImage} from './wallpaper-image';
import {useStateValue} from '../store/reducer';
import {
  getTrendingWallpapers,
  getCategorizedWallpaper,
} from '../utils/fetch-api';
import {
  SET_MORE_TRENDING_WALLPAPERS,
  SET_TRENDING_WALLPAPERS,
  SET_MORE_CATEGORY_WALLPAPERS,
} from '../store/state';
import {CustomAlert} from './custom-alert';

const {width, height} = Dimensions.get('screen');

const ImageComponent = props => {
  const [loading, setLoading] = React.useState(false);

  const handleImage = () => {
    props.navigation.navigate('FullScreen', {uri: props.original});
  };

  return (
    <View>
      <TouchableHighlight style={styles.rowImageStyle} onPress={handleImage}>
        <Image
          style={loading ? styles.loadingImage : styles.imageStyle}
          source={{uri: props.uri}}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
      </TouchableHighlight>
    </View>
  );
};

const ImageGrid = props => {
  const [
    {trendingWallpapers, categorizedWallpapers},
    dispatch,
  ] = useStateValue();
  const handleNewData = () => {
    if (props.query) {
      getCategorizedWallpaper(props.query).then(res => {
        if (res.error) return CustomAlert({title: 'Error', message: res.error});
        dispatch({
          type: SET_MORE_CATEGORY_WALLPAPERS,
          categorizedWallpapers: res,
        });
      });
    } else {
      getTrendingWallpapers().then(res => {
        if (res.error) return console.log('error');
        dispatch({type: SET_MORE_TRENDING_WALLPAPERS, trendingWallpapers: res});
      });
    }
  };

  return (
    <View style={styles.itemContainer}>
      <FlatList
        data={props.trendingWallpapers.photos}
        renderItem={({item}) => (
          <ImageComponent
            uri={item.src.medium}
            original={item.src.original}
            navigation={props.navigation}
          />
        )}
        keyExtractor={item => item.id}
        numColumns={2}
        onEndReached={handleNewData}
        onEndReachedThreshold={0.5}
      />
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
