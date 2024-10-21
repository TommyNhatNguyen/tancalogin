import React, {useRef, useState} from 'react';
import {
  Alert,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import {colors} from '../../styles/colorStyle';
import MyAppText from '../../components/MyAppText';
import MyInput from '../../components/MyInput';
import {MESSAGE_ERROR} from '../../utils/message';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';
import {validateVietNamPhoneNumber} from '../../utils/validation';
import Header from '../RegisterScreen/components/Header';
import {PATH} from '../../constants/path';
import {authServices} from '../../services/authServices';
import LoadingView from '../../components/LoadingView';
import {handleCheckLogin} from '../../utils/handleCheckLogin';
const bgImage = require('../../assets/images/bg-gradient.png');

type LoginScreenType = {
  navigation: any;
};

const LoginScreen = ({navigation}: LoginScreenType) => {
  const [formData, setFormData] = useState({
    phone: '',
  });
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState<any>('');
  const phoneInputRef = useRef<TextInput | null>(null);
  //* --- Get phone number on typing ---*/
  const handleChangePhone = (phoneNum: string) => {
    if (phoneNum.length <= 11) {
      setFormData(prev => {
        return {...prev, phone: phoneNum};
      });
      setLoginError('');
    } else {
      Alert.alert(MESSAGE_ERROR.phone.title, MESSAGE_ERROR.phone.message, [
        {text: 'Xác nhận', onPress: () => phoneInputRef.current?.clear()},
      ]);
    }
  };
  //* --- Validate phone number to generate OTP ---*/
  const handleValidatePhoneNumber = (phone: string) => {
    try {
      setLoginLoading(true);
      handleCheckLogin(
        phone,
        userData => {
          navigation.navigate(PATH.OTP, {userData: userData});
        },
        error => {
          setLoginError(error);
          Alert.alert(
            MESSAGE_ERROR.loginError.title,
            MESSAGE_ERROR.loginError.message,
            [{text: 'Xác nhận', onPress: () => phoneInputRef.current?.focus()}],
          );
        },
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoginLoading(false);
    }
  };

  //* --- Handle login process ---*/
  const handleLogin = () => {
    if (!formData.phone) {
      Alert.alert(
        MESSAGE_ERROR.required.title,
        MESSAGE_ERROR.required.message,
        [{text: 'Xác nhận', onPress: () => phoneInputRef.current?.focus()}],
      );
    } else if (!validateVietNamPhoneNumber(formData.phone)) {
      Alert.alert(MESSAGE_ERROR.phone.title, MESSAGE_ERROR.phone.message, [
        {
          text: 'Xác nhận',
          onPress: () => {
            setFormData({phone: ''});
            phoneInputRef.current?.focus();
          },
        },
      ]);
    } else {
      // Call API
      handleValidatePhoneNumber(formData.phone);
      setFormData({phone: ''});
      Keyboard.dismiss();
    }
  };
  return (
    <ImageBackground
      source={bgImage}
      resizeMode="cover"
      style={[styles.container]}>
      <View style={styles.contentContainer}>
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
              Đăng nhập
            </MyAppText>
            <MyAppText fontWeight="regular" styles={formStyle.welcome}>
              Xin chào, rất vui khi bạn đã quay lại
            </MyAppText>
          </View>

          <View style={formStyle.inputContainer}>
            <MyInput
              handleChange={handleChangePhone}
              value={formData.phone}
              placeholder="Nhập số điện thoại"
              inputMode="numeric"
              keyboardType="phone-pad"
              type="phone"
              ref={phoneInputRef}
              error={loginError}
            />
          </View>

          <MyTouchableOpacity
            onPress={handleLogin}
            style={formStyle.submitBtn}
            variant="fill">
            Đăng nhập
          </MyTouchableOpacity>

          <MyAppText styles={formStyle.textAzure} fontWeight="light">
            Sign in with
            <MyAppText fontWeight="medium"> Azure AD</MyAppText>
          </MyAppText>
        </KeyboardAvoidingView>
      </View>
      {/* --- LOADING VIEW ---- */}
      {loginLoading && !!!loginError && <LoadingView />}
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
export default LoginScreen;
