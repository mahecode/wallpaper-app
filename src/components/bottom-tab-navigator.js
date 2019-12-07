import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const Width = Dimensions.get('screen').width;

const CustomBottomTabNavigator = props => {
  return (
    <View style={styles.container}>
      <View style={styles.tabNavigator}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={styles.tabContainer}>
          <Ionicons name="ios-home" size={32} color="#838383" />
          <Text style={styles.textStyle}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Trending')}
          style={styles.tabContainer}>
          <MaterialCommunityIcons name="fire" size={32} color="#838383" />
          <Text style={styles.textStyle}>Trending</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabContainer}>
          <MaterialCommunityIcons name="leaf" size={32} color="#838383" />
          <Text style={styles.textStyle}>Popular</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tabContainer}>
          <MaterialCommunityIcons
            name="cards-heart"
            size={32}
            color="#838383"
          />
          <Text style={styles.textStyle}>Liked</Text>
        </TouchableOpacity>
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
  textStyle: {
    fontSize: 12,
  },
  tabContainer: {alignItems: 'center'},
});
