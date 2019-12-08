import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {IMAGE_ARRAY} from '../utils/constants';

const {width, height} = Dimensions.get('screen');

const ImageComponent = props => {
  const handleImage = () => {
    props.navigation.navigate('FullScreen', {uri: props.uri});
  };
  return (
    <TouchableHighlight style={styles.rowImageStyle} onPress={handleImage}>
      <Image style={styles.imageStyle} source={{uri: props.uri}} />
    </TouchableHighlight>
  );
};

const ImageGrid = props => {
  return (
    <View style={styles.itemContainer}>
      <FlatList
        data={IMAGE_ARRAY}
        renderItem={({item}) => (
          <ImageComponent uri={item.uri} navigation={props.navigation} />
        )}
        keyExtractor={item => item.uri}
        numColumns={2}
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
    alignItems: 'center',
  },

  imageStyle: {
    width: 150,
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
});
