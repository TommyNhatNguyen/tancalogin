import React, {RefObject, useRef, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {colors} from '../styles/colorStyle';
import MyInput from './MyInput';

type OTPComponentType = {
  codes: string[] | undefined;
  length: number;
  handleSetCodes: (text: string, index: number) => void;
};

const OTPComponent = ({codes, length, handleSetCodes}: OTPComponentType) => {
  const refs: RefObject<TextInput>[] = Array(length)
    .fill('')
    .map(() => useRef<TextInput>(null));
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const handleKeyPress = (text: string, selectIndex: number) => {
    if (
      text === 'Backspace' &&
      codes?.[selectIndex] === '' &&
      selectIndex !== 0
    ) {
      const prevInputIndex = selectIndex - 1;
      setFocusedIndex(prevInputIndex);
      refs[prevInputIndex].current?.focus();
    } else if (
      text !== '' &&
      text !== 'Backspace' &&
      codes?.[selectIndex] === '' &&
      selectIndex + 1 !== length
    ) {
      const nextInputIndex = selectIndex + 1;
      setFocusedIndex(nextInputIndex);
      refs[nextInputIndex].current?.focus();
    } else if (
      text !== '' &&
      text !== 'Backspace' &&
      selectIndex === length - 1
    ) {
      setFocusedIndex(null);
      refs[selectIndex].current?.blur();
    }
  };
  const handleTextChange = (text: string, selectIndex: number) => {
    handleSetCodes(text, selectIndex);
    handleKeyPress(text, selectIndex);
  };
  const handleFocus = (selectIndex: number) => {
    setFocusedIndex(selectIndex);
  };
  const handleBlur = () => {
    setFocusedIndex(null);
  };
  return (
    <View style={formStyle.inputContainer}>
      {codes?.map((code, index) => {
        return (
          <MyInput
            key={index}
            value={code}
            ref={refs[index]}
            maxLength={1}
            handleChange={text => handleTextChange(text, index)}
            onFocus={() => handleFocus(index)}
            onBlur={handleBlur}
            onKeyPress={({nativeEvent: {key}}) => handleKeyPress(key, index)}
            containerStyle={StyleSheet.compose(
              formStyle.input,
              focusedIndex === index && formStyle.inputFocused,
            )}
            inputStyle={formStyle.inputText}
            inputMode="numeric"
            keyboardType="numeric"
          />
        );
      })}
    </View>
  );
};

export default OTPComponent;

const formStyle = StyleSheet.create({
  inputContainer: {
    marginTop: 40,
    marginBottom: 29,
    flexDirection: 'row',
    gap: 25,
  },
  input: {
    flex: 1,
    height: 52,
    width: 47,
    paddingHorizontal: 0,
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: colors.mainColor,
  },
  inputText: {
    fontFamily: 'SVN-GilroyBold',
    fontSize: 20.82,
    textAlign: 'center',
  },
});
