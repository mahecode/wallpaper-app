import React from 'react';
import {View, Text, Alert} from 'react-native';
import RNFetchBlob from 'rn-fetch-blob';
import {request_storage_runtime_permission} from '../utils/utils';

export default class DownloadImage extends React.Component {
  async componentDidMount() {
    console.log(this.props)
    await request_storage_runtime_permission();
  }

  downloadImage = () => {
   
    var date = new Date();
    var image_URL = this.props.uri;
    var ext = this.getExtention(image_URL);
    ext = '.' + ext[0];
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

  getExtention = filename => {
    return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
  };

  render() {
    console.log(this.props);
    return null;
  }
}
