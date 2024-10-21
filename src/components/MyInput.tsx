import React, {LegacyRef, forwardRef} from 'react';
import {
  Image,
  StyleProp,
  StyleSheet,
  StyleSheetProperties,
  TextInput,
  TextInputComponent,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewComponent,
  ViewStyle,
} from 'react-native';
import {colors} from '../styles/colorStyle';
import {MulishFont} from '../styles/fontStyle';
import MyAppText from './MyAppText';
const dropDownIcon = require('../assets/images/dropdown-icon.png');

type MyInputType = {
  icon?: any;
  handleChange?: (text: string) => void;
  type?: 'phone';
  containerStyle?: ViewStyle | StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  error?: any;
} & TextInputProps;

const MyInput = (
  {
    icon,
    handleChange,
    type,
    containerStyle,
    inputStyle,
    error,
    ...props
  }: MyInputType,
  ref: LegacyRef<TextInput>,
) => {
  const _onChange = (text: string) => {
    if (handleChange) handleChange(text);
  };
  const _onChangePhoneReigon = () => {};
  return (
    <View
      style={[
        StyleSheet.compose(styles.container, containerStyle),
        error && styles.error,
      ]}>
      {icon && <Image source={icon} style={styles.icon} />}
      {type === 'phone' && (
        <TouchableOpacity onPress={_onChangePhoneReigon}>
          <View style={styles.phoneDropDown}>
            <MyAppText
              fontFamily="mulish"
              fontWeight="semibold"
              styles={styles.phoneDropDownText}>
              +84
            </MyAppText>
            <Image source={dropDownIcon} style={styles.dropDownIcon} />
          </View>
        </TouchableOpacity>
      )}
      <TextInput
        placeholderTextColor={colors.placeholderColor}
        style={StyleSheet.compose(styles.input, inputStyle)}
        onChangeText={_onChange}
        ref={ref}
        {...props}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 48,
    width: '100%',
    backgroundColor: colors.inputBgColor,
    borderRadius: 10,
    flexDirection: 'row',
    paddingHorizontal: 15,
    gap: 8,
  },
  input: {
    width: '100%',
    height: '100%',
    fontFamily: MulishFont.medium,
    fontSize: 18.51,
    color: colors.textColor,
  },
  icon: {
    width: 26,
    height: '100%',
    objectFit: 'contain',
  },
  phoneDropDown: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 9,
    paddingRight: 5,
    borderRightColor: colors.secondColor,
    borderRightWidth: 1,
    marginRight: 14,
    height: '100%',
  },
  phoneDropDownText: {
    fontSize: 18.51,
    color: colors.textColor,
  },
  dropDownIcon: {
    width: 14,
    height: 14,
    objectFit: 'contain',
  },
  error: {borderWidth: 1, borderColor: 'red'},
});

export default forwardRef(MyInput);
