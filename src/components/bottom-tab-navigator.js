import * as React from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';
import BottomTab from './bottom-tab';
const Width = Dimensions.get('screen').width;

const CustomBottomTabNavigator = props => {
  return (
    <View style={styles.container}>
      <View style={styles.tabNavigator}>
        <BottomTab
          iconName="home"
          tabName="Home"
          navigation={props.navigation}
        />
        <BottomTab
          iconName="fire"
          tabName="Trending"
          navigation={props.navigation}
        />
        <BottomTab
          iconName="archive"
          tabName="Categories"
          navigation={props.navigation}
        />
        <BottomTab
          iconName="information"
          tabName="About"
          navigation={props.navigation}
        />
      </View>
    </View>
  );
};

export default CustomBottomTabNavigator;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
  },
  tabNavigator: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: Width,
    height: 70,
    backgroundColor: 'white',
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    shadowRadius: 16.0,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: '#000',
    elevation: 24,
  },
});
