import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {centerStyle} from '../../styles/centerStyle';
import {colors} from '../../styles/colorStyle';
const logo = require('../../assets/images/logo.png');
const SplashScreen = () => {
  return (
    <View style={[styles.container]}>
      <Image source={logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...centerStyle.columnCenter,
    height: '100%',
    backgroundColor: colors.whiteColor,
  },
});

export default SplashScreen;
