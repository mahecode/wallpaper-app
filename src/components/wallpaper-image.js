import React from 'react';
import {View, Text, ActivityIndicator, Image} from 'react-native';

export const WallpaperImage = ({styles, uri}) => {
  const [loading, setLoading] = React.useState(false);
  return (
    <View>
      {loading && <ActivityIndicator color="blue" size={34} />}
      <Image
        style={styles}
        source={{uri}}
        onLoadStart={() => setLoading(true)}
        onLoadEnd={() => setLoading(false)}
      />
    </View>
  );
};
