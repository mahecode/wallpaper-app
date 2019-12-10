import {Alert} from 'react-native';

export const CustomAlert = ({title, message}) => {
  return Alert.alert(title, message);
};
