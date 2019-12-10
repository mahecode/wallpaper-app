import {PermissionsAndroid} from 'react-native';
import {Toast} from '../components/toast';

export async function request_storage_runtime_permission() {
  try {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
      {
        title: 'Wallpaper app',
        message:
          'Wallpaper App needs access to your storage to download Wallpapers.',
      },
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      Toast({message: 'Storage Permission Granted.'});
    } else {
      Toast({message: 'Storage Permission Not Granted'});
    }
  } catch (err) {
    console.warn(err);
  }
}

export const getExtention = filename => {
  return /[.]/.exec(filename) ? /[^.]+$/.exec(filename) : undefined;
};

export const getRandomInt = max => {
  return Math.floor(Math.random() * Math.floor(max));
};
