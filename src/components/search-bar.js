import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Width = Dimensions.get('screen').width;

const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <TouchableOpacity>
          <FontAwesome name="align-left" size={32} color="#414141" />
        </TouchableOpacity>
        <View style={styles.textInputContainer}>
          <TextInput style={styles.textInput} />
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
