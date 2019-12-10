import {ToastAndroid} from 'react-native';

export const Toast = ({message}) => {
  return ToastAndroid.show(message, ToastAndroid.SHORT);
};
