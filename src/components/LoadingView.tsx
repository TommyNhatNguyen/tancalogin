import React from 'react';
import {View} from 'react-native';

const LoadingView = () => {
  return (
    <View
      style={{
        backgroundColor: 'rgba(0,0,0, 0.5)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
      }}></View>
  );
};

export default LoadingView;
