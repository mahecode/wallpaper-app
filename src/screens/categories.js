import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {categoryArray} from '../utils/constants';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Category = props => {
  return (
    <View style={styles.innerContainer}>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('Categorized Wallpaper', {
            query: props.name,
          })
        }>
        <Image style={styles.imageStyle} source={{uri: props.uri}} />
      </TouchableOpacity>
      <View style={styles.textStyle}>
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </View>
  );
};

const Categories = props => {
  return (
    <View style={styles.container}>
      <View style={styles.gridStyle}>
        <FlatList
          data={categoryArray}
          renderItem={({item}) => (
            <Category
              navigation={props.navigation}
              uri={item.uri}
              name={item.name}
            />
          )}
          keyExtractor={item => item.name}
          numColumns={3}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  innerContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    elevation: 20,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  gridStyle: {
    alignContent: 'space-between',
    paddingTop: 20,
  },
  textStyle: {
    position: 'absolute',
    zIndex: 2,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default Categories;
