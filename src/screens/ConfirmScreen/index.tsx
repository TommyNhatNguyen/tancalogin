import React, {useState} from 'react';
import MyAppText from '../../components/MyAppText';
import {
  Alert,
  ImageBackground,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  View,
} from 'react-native';
import {colors} from '../../styles/colorStyle';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';
import OTPComponent from '../../components/OTPComponent';
import {useTimer} from '../../utils/useTimer';
import {MESSAGE_ERROR} from '../../utils/message';
import {tokenMethod} from '../../utils/tokenMethod';
import {useDispatch} from 'react-redux';
import {setUser} from '../../store/slices/authSlice';
import AuthHeader from '../../components/AuthHeader';
import {fontSize} from '../../styles/fontStyle';
const bgImage = require('../../assets/images/bg-gradient.png');

type ConfirmScreenType = {
  navigation: any;
  route: any;
};

const OPT_LENGTH = 5;

const ConfirmScreen = ({navigation, route}: ConfirmScreenType) => {
  const counter = useTimer(36);
  const dispatch = useDispatch();
  const {
    userData: {otp: confirmOtp, phone, token},
  } = route.params;
  const [codes, setCodes] = useState<string[] | undefined>(
    Array(OPT_LENGTH).fill(''),
  );
  const handleSetCodes = (text: string, selectIndex: number) => {
    setCodes(prev =>
      prev?.map((item, index) => (index === selectIndex ? text : item)),
    );
  };
  const handleConfirm = async () => {
    const userOtp = codes?.join('');
    if (userOtp === confirmOtp) {
      tokenMethod.setData({token: token});
      dispatch(setUser({phone}));
    } else {
      Alert.alert(
        MESSAGE_ERROR.otpError.title,
        MESSAGE_ERROR.otpError.message,
        [
          {
            text: 'Xác nhận',
            onPress: () => setCodes(Array(OPT_LENGTH).fill('')),
          },
        ],
      );
    }
  };

  return (
    <ImageBackground
      source={bgImage}
      resizeMode="cover"
      style={[styles.container]}>
      <View style={[styles.contentContainer]}>
        {/* ---- HEADER TANCA LOGO ----- */}
        <SafeAreaView style={{flex: 1}}>
          <AuthHeader navigation={navigation} containerStyles={styles.header} />
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
              Nhập mã OTP gửi đến {phone}
            </MyAppText>
          </View>

          <OTPComponent
            length={OPT_LENGTH}
            handleSetCodes={handleSetCodes}
            codes={codes}
          />

          <MyTouchableOpacity
            onPress={handleConfirm}
            style={formStyle.submitBtn}
            variant="fill">
            Đồng ý
          </MyTouchableOpacity>

          <MyAppText styles={formStyle.textAzure} fontWeight="light">
            Gửi lại sau
            <MyAppText fontWeight="medium"> ({counter}s)</MyAppText>
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
    fontSize: fontSize.title,
    color: colors.textColor,
  },
  welcome: {
    fontSize: fontSize.textSmall,
    color: colors.textSecondColor,
  },
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
    fontSize: fontSize.titleSmall,
    textAlign: 'center',
  },
  submitBtn: {
    maxHeight: 53,
    maxWidth: 'auto',
    marginBottom: 44,
  },
  textAzure: {
    color: colors.textColor,
    textAlign: 'center',
    fontSize: fontSize.textSmall,
  },
});

export default ConfirmScreen;
