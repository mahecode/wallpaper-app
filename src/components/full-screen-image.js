import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const FullScreen = props => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => props.goBack()}
          style={styles.iconContainer}>
          <Ionicons name="ios-arrow-back" size={30} color="black" />
        </TouchableOpacity>
        <Image style={styles.imageStyle} source={{uri: props.uri}} />
        <TouchableOpacity style={styles.downloadIcon}>
          <Entypo name="download" size={30} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FullScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageStyle: {
    width: Width,
    height: height,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconContainer: {
    height: 50,
    width: 50,
    backgroundColor: 'white',
    opacity: 0.5,
    position: 'absolute',
    zIndex: 2,
    margin: 30,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadIcon: {
    height: 70,
    width: 70,
    backgroundColor: 'white',
    opacity: 0.5,
    position: 'absolute',
    zIndex: 2,
    borderRadius: 50,
    top: height - height / 5,
    left: Width - Width / 3.5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
