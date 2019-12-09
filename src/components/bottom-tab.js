import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const BottomTab = props => {
  const {iconName, tabName, navigation} = props;
  const handleNavigation = () => {
    navigation.navigate(tabName);
  };
  return (
    <TouchableOpacity onPress={handleNavigation} style={styles.tabContainer}>
      <MaterialCommunityIcons name={iconName} size={32} color="#838383" />
      <Text style={styles.textStyle}>{tabName}</Text>
    </TouchableOpacity>
  );
};

export default BottomTab;

const styles = StyleSheet.create({
  tabContainer: {alignItems: 'center'},
  textStyle: {
    fontSize: 12,
  },
});
