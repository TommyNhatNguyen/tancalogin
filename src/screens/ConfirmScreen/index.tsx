import React from 'react';
import MyAppText from '../../components/MyAppText';
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from '../../styles/colorStyle';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from '../RegisterScreen/components/Header';
import Form from '../../components/Form';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';
const bgImage = require('../../assets/images/bg-gradient.png');

type ConfirmScreenType = {
  navigation: any;
  route: any;
};

const ConfirmScreen = ({navigation, route}: ConfirmScreenType) => {
  const insets = useSafeAreaInsets();
  const {phoneNumber} = route.params;
  console.log(phoneNumber);
  const handleConfirm = () => {};
  return (
    <ImageBackground
      source={bgImage}
      resizeMode="cover"
      style={[styles.container]}>
      <View
        style={[
          {
            paddingTop: insets.top,
          },
          styles.contentContainer,
        ]}>
        <Header navigation={navigation} containerStyles={{flex: 1}} />
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'position' : 'height'}
          style={{
            flex: 1,
            maxWidth: '100%',
          }}>
          <Form
            containerStyles={{
              flex: 1,
              paddingBottom: insets.bottom,
            }}>
            <View style={formStyle.container}>
              <MyAppText fontWeight="semibold" styles={formStyle.title}>
                Xác minh OTP
              </MyAppText>
              <MyAppText fontWeight="regular" styles={formStyle.welcome}>
                Nhập mã OTP gửi đến +84336785321
              </MyAppText>
            </View>

            <MyTouchableOpacity
              onPress={handleConfirm}
              style={formStyle.submitBtn}
              variant="fill">
              Đồng ý
            </MyTouchableOpacity>

            <MyAppText styles={formStyle.textAzure} fontWeight="light">
              Gửi lại sau
              <MyAppText fontWeight="medium"> (36)</MyAppText>
            </MyAppText>
          </Form>
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainBgColor,
    height: '100%',
  },
  contentContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },
});

const formStyle = StyleSheet.create({
  container: {
    marginTop: 34,
    gap: 13,
  },
  title: {
    fontSize: 23.43,
    color: colors.textColor,
  },
  welcome: {
    fontSize: 16.45,
    color: colors.textSecondColor,
  },
  inputContainer: {
    marginTop: 40,
    marginBottom: 29,
    gap: 20,
  },
  submitBtn: {
    maxHeight: 53,
    maxWidth: 'auto',
  },
  textAzure: {
    color: colors.textColor,
    textAlign: 'center',
    fontSize: 16.45,
    marginTop: 'auto',
  },
});

export default ConfirmScreen;
