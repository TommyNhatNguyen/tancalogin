import React from 'react';
import {Image, StyleSheet, View, useWindowDimensions} from 'react-native';
import MyAppText from './MyAppText';
import {colors} from '../styles/colorStyle';
import {WelcomeDataType} from '../types/WelcomeDataType';

type WelcomeComponentType = WelcomeDataType;

const WelcomeComponent = ({image, content}: WelcomeComponentType) => {
  let {width: windowWidth} = useWindowDimensions();
  return (
    <View style={[styles.welcomeViewContainer, {width: windowWidth}]}>
      <Image source={image} />
      <MyAppText
        fontFamily="mulish"
        fontWeight="semibold"
        styles={styles.welcomeViewText}>
        {content}
      </MyAppText>
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeViewContainer: {
    height: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    margin: 'auto',
    maxHeight: 382,
  },
  welcomeViewText: {
    color: colors.textColor,
    fontSize: 23.43,
    textAlign: 'center',
  },
});

export default WelcomeComponent;
