import React from 'react';
import {StyleSheet, Text, TextProps, TextStyle} from 'react-native';

type MyAppTextType = {
  fontFamily?: 'gilroy' | 'mulish';
  fontWeight?: 'regular' | 'bold' | 'medium' | 'semibold' | 'light';
  children: React.ReactNode;
  styles?: TextStyle | TextStyle[];
} & TextProps;

const GilroyFont = {
  regular: '',
  bold: 'Bold',
  medium: 'Medium',
  semibold: 'SemiBold',
  light: 'Light',
};

const MulishFont = {
  regular: 'Regular',
  bold: 'Bold',
  medium: 'Medium',
  semibold: 'SemiBold',
  light: 'Regular',
};

const GILROY_FONT = 'SVN-Gilroy';
const MULISH_FONT = 'Mulish';

const MyAppText = ({
  children,
  fontFamily = 'gilroy',
  fontWeight = 'regular',
  styles,
  ...props
}: MyAppTextType) => {
  let fontFamilyStyle;
  switch (fontFamily) {
    case 'mulish':
      fontFamilyStyle = `${MULISH_FONT}-${MulishFont[fontWeight]}`;
      break;

    default:
      fontFamilyStyle = `${GILROY_FONT}${GilroyFont[fontWeight]}`;
      break;
  }
  const styling = StyleSheet.flatten([{fontFamily: fontFamilyStyle}, styles]);
  return (
    <Text {...props} style={styling}>
      {children}
    </Text>
  );
};

export default MyAppText;
