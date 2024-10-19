import React from 'react';
import {StyleSheet, View, ViewStyle} from 'react-native';
import {colors} from '../styles/colorStyle';

type FormType = {
  containerStyles?: ViewStyle;
  children: React.ReactNode;
};

const Form = ({containerStyles, children}: FormType) => {
  return <View style={[containerStyles, styles.container]}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.whiteColor,
    width: '100%',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingHorizontal: 20,
  },
});

export default Form;
