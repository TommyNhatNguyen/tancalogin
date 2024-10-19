import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import {colors} from '../styles/colorStyle';
import MyAppText from './MyAppText';

type MyTouchableOpacityType = {
  children: React.ReactNode;
  style?: StyleProp<any>;
  textStyle?: StyleProp<any>;
  variant?: 'border' | 'fill';
} & TouchableOpacityProps;

const MyTouchableOpacity = ({
  variant = 'border',
  children,
  style = [],
  textStyle = [],
  ...props
}: MyTouchableOpacityType) => {
  let btnCustomStyle = {};
  let textCustomStyle = {};
  switch (variant) {
    case 'fill':
      btnCustomStyle = styles.btnFill;
      textCustomStyle = styles.textBtnFill;
      break;
    case 'border':
      btnCustomStyle = styles.btnBorder;
      textCustomStyle = styles.textBtnBorder;
      break;

    default:
      btnCustomStyle = styles.btnBorder;
      textCustomStyle = styles.textBtnBorder;
      break;
  }
  return (
    <TouchableOpacity style={[styles.btn, btnCustomStyle, style]} {...props}>
      <MyAppText
        fontWeight="medium"
        styles={[styles.textBtn, textCustomStyle, textStyle]}>
        {children}
      </MyAppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    flex: 1,
    height: 53,
    maxWidth: 160,
    borderRadius: 14,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18.51,
  },
  btnBorder: {
    borderWidth: 1,
    borderColor: colors.mainColor,
  },
  btnFill: {
    backgroundColor: colors.mainColor,
    borderColor: colors.mainColor,
  },
  textBtn: {
    fontSize: 18.51,
  },
  textBtnBorder: {
    color: colors.mainColor,
  },
  textBtnFill: {
    color: colors.whiteColor,
  },
});

export default MyTouchableOpacity;
