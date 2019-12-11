import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Linking} from 'react-native';

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
      <Text style={styles.textStyle}>{props.listName}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  list: {
    height: 60,
    borderBottomWidth: 2,
    borderColor: 'gray',
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  textStyle: {
    fontSize: 20,
    marginHorizontal: 20,
  },
});

export default List;
