import * as React from 'react';
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import RNFetchBlob from 'rn-fetch-blob';
import {request_storage_runtime_permission, getExtention} from '../utils/utils';

const Width = Dimensions.get('screen').width;
const height = Dimensions.get('screen').height;

const FullScreen = props => {
  const [loading, setLoading] = React.useState(false);
  const handleDownload = async () => {
    await request_storage_runtime_permission();
    var date = new Date();
    var image_URL = props.uri;
    var ext = getExtention(image_URL);
    ext = '.' + ext[0].split('&')[0];
    const {config, fs} = RNFetchBlob;
    let PictureDir = fs.dirs.PictureDir;
    let options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path:
          PictureDir +
          '/image_' +
          Math.floor(date.getTime() + date.getSeconds() / 2) +
          ext,
        description: 'Image',
      },
    };
    config(options)
      .fetch('GET', image_URL)
      .then(res => {
        Alert.alert('Image Downloaded Successfully.');
      });
  };

  return (
    <View style={styles.container}>
      <View>
        {!loading && (
          <TouchableOpacity
            onPress={() => props.goBack()}
            style={styles.iconContainer}>
            <Ionicons name="ios-arrow-back" size={30} color="black" />
          </TouchableOpacity>
        )}
        {loading && (
          <View style={styles.activityIndicator}>
            <ActivityIndicator color="blue" size={42} />
          </View>
        )}
        <Image
          style={styles.imageStyle}
          source={{uri: props.uri}}
          onLoadStart={() => setLoading(true)}
          onLoadEnd={() => setLoading(false)}
        />
        {!loading && (
          <TouchableOpacity
            onPress={() => handleDownload()}
            style={styles.downloadIcon}>
            <Entypo name="download" size={30} color="black" />
          </TouchableOpacity>
        )}
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
    bottom: height / 7,
    right: Width / 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  activityIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 50,
  },
});
