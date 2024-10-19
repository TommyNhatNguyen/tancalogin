import React from 'react';
import MyAppText from '../../components/MyAppText';
import {
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from '../../styles/colorStyle';
import Header from '../RegisterScreen/components/Header';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';
const bgImage = require('../../assets/images/bg-gradient.png');

type ConfirmScreenType = {
  navigation: any;
  route: any;
};

const ConfirmScreen = ({navigation, route}: ConfirmScreenType) => {
  const {phoneNumber} = route.params;
  console.log(phoneNumber);
  const handleConfirm = () => {};
  return (
    <ImageBackground
      source={bgImage}
      resizeMode="cover"
      style={[styles.container]}>
      <View style={[styles.contentContainer]}>
        {/* ---- HEADER TANCA LOGO ----- */}
        <SafeAreaView style={{flex: 1}}>
          <Header navigation={navigation} containerStyles={styles.header} />
        </SafeAreaView>
        {/* ---- FORM ----- */}
        <View style={{flex: 1}}></View>
        <KeyboardAvoidingView
          behavior={'position'}
          contentContainerStyle={styles.formInnerContainer}
          style={styles.formOuterContainer}>
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
        </KeyboardAvoidingView>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mainBgColor,
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    position: 'relative',
  },
  header: {flex: 1, marginTop: 16},
  formOuterContainer: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    minHeight: '50%',
  },
  formInnerContainer: {
    backgroundColor: colors.whiteColor,
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingHorizontal: 20,
    paddingBottom: 33,
    paddingTop: 34,
    flex: 1,
  },
});

const formStyle = StyleSheet.create({
  container: {
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
    marginBottom: 44,
  },
  textAzure: {
    color: colors.textColor,
    textAlign: 'center',
    fontSize: 16.45,
  },
});

export default ConfirmScreen;
