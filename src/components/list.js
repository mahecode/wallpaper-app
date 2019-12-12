import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ICON_COLOR} from '../utils/constants';

const List = props => {
  const handleListItem = () => {
    if (props.url) {
      Linking.openURL(props.url);
    }
    if (props.navigation) {
      props.navigation.navigate('Info');
    }
  };

  return (
    <TouchableOpacity onPress={handleListItem} style={styles.list}>
      <MaterialCommunityIcons
        color={ICON_COLOR}
        name={props.iconName}
        size={30}
      />
      <Text style={styles.textStyle}>{props.listName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    height: 60,
    borderBottomWidth: 2,
    borderColor: ICON_COLOR,
    marginHorizontal: 20,
    alignItems: 'center',
    flexDirection: 'row',
  },
  textStyle: {
    fontSize: 20,
    marginHorizontal: 20,
  },
});

export default List;
