import * as React from 'react';
import {View, StyleSheet, Dimensions, TextInput, Image} from 'react-native';

const Width = Dimensions.get('screen').width;

const SearchBar = props => {
  const handleSearch = query => {
    props.navigation.navigate('Search', {query});
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Image
          source={require('../../android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png')}
        />
        <View style={styles.textInputContainer}>
          <TextInput
            onSubmitEditing={e => handleSearch(e.nativeEvent.text)}
            placeholder="Search"
            style={styles.textInput}
          />
        </View>
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    paddingTop: 20,
    paddingBottom: 10,
  },
  innerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInput: {
    width: Width - 80,
    borderRadius: 50,
    height: 50,
    backgroundColor: '#E6E6E6',
    paddingHorizontal: 20,
    borderWidth: 2,
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
