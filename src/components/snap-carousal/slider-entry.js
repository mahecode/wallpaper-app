import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from 'react-native';
import PropTypes from 'prop-types';
import {ParallaxImage} from 'react-native-snap-carousel';
import styles from './slider-entry.style';
import {StateContext} from '../../store/reducer';
import {ADD_WALLPAPERS} from '../../store/state';
import {getWallpapers} from '../../utils/fetch-api';

export default class SliderEntry extends Component {
  static contextType = StateContext;

  state = {
    loading: false,
  };

  static propTypes = {
    data: PropTypes.object.isRequired,
    even: PropTypes.bool,
    parallax: PropTypes.bool,
    parallaxProps: PropTypes.object,
  };

  get image() {
    const {
      parallax,
      parallaxProps,
      even,
      data: {src},
    } = this.props;
    return parallax ? (
      <ParallaxImage
        source={{uri: src.medium}}
        containerStyle={[
          styles.imageContainer,
          even ? styles.imageContainerEven : {},
        ]}
        style={styles.image}
        parallaxFactor={0.35}
        showSpinner={true}
        spinnerColor={even ? 'rgba(255, 255, 255, 0.4)' : 'rgba(0, 0, 0, 0.25)'}
        {...parallaxProps}
      />
    ) : (
      <Image
        source={{uri: src.medium}}
        style={styles.image}
        onLoadStart={() => this.setState({loading: true})}
        onLoadEnd={() => this.setState({loading: false})}
      />
    );
  }

  render() {
    const {
      data: {title, subtitle, src},
      even,
    } = this.props;

    const uppercaseTitle = title ? (
      <Text
        style={[styles.title, even ? styles.titleEven : {}]}
        numberOfLines={2}>
        {title.toUpperCase()}
      </Text>
    ) : (
      false
    );

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={styles.slideInnerContainer}
        onPress={() =>
          this.props.navigation.navigate('FullScreen', {
            uri: src.large,
            original: src.original,
          })
        }>
        <View style={styles.shadow} />
        <View
          style={[
            styles.imageContainer,
            even ? styles.imageContainerEven : {},
          ]}>
          {this.image}
          {this.state.loading && <ActivityIndicator color="blue" size={32} />}
          {/* <View
            style={[styles.radiusMask, even ? styles.radiusMaskEven : {}]}
          /> */}
        </View>
        {/* <View
          style={[styles.textContainer, even ? styles.textContainerEven : {}]}>
          {uppercaseTitle}
          <Text
            style={[styles.subtitle, even ? styles.subtitleEven : {}]}
            numberOfLines={2}>
            {subtitle}
          </Text>
        </View> */}
      </TouchableOpacity>
    );
  }
}
