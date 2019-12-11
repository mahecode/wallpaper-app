import * as React from 'react';
import Carousel from 'react-native-snap-carousel';
import SliderEntry from './slider-entry';
import {sliderWidth, itemWidth} from './slider-entry.style';
import styles from './index.style';

const SnapCarousal = props => {
  const _renderItem = ({item, index}) => {
    return (
      <SliderEntry
        page={props.page}
        data={item}
        even={(index + 1) % 2 === 0}
        index={index}
        navigation={props.navigation}
      />
    );
  };

  return (
    <Carousel
      data={props.photos}
      renderItem={_renderItem}
      sliderWidth={sliderWidth}
      itemWidth={itemWidth}
      containerCustomStyle={styles.slider}
      contentContainerCustomStyle={styles.sliderContentContainer}
      layout={'stack'}
      loop={true}
    />
  );
};

export default SnapCarousal;
