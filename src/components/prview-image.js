import * as React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';

const Width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const uri =
  'https://images.pexels.com/photos/3224164/pexels-photo-3224164.jpeg?cs=srgb&dl=photo-of-christmas-balls-3224164.jpg&fm=jpg';

const PreviewImage = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageStyle} source={{uri}} />
      </View>
    </View>
  );
};

export default PreviewImage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
  },
  imageStyle: {
    width: Width - 50,
    height: height - 150,
    flexDirection: 'row',
    justifyContent: 'center',
    borderRadius: 25,
  },
  imageContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 34,
    borderRadius: 25,
  },
});
