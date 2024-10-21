import React from 'react';
import {StyleSheet, View} from 'react-native';
import MyTouchableOpacity from '../../../components/MyTouchableOpacity';
import MyAppText from '../../../components/MyAppText';
import {colors} from '../../../styles/colorStyle';

type CtaType = {
  handleLogin: () => void;
  handleRegister: () => void;
};

const Cta = ({handleLogin, handleRegister}: CtaType) => {
  const _onNavigateLogin = () => {
    handleLogin();
  };
  const _onNavigateRegister = () => {
    handleRegister();
  };
  return (
    <View style={styles.ctaContainer}>
      <View style={styles.btnGroup}>
        <MyTouchableOpacity onPress={_onNavigateLogin}>
          Log in
        </MyTouchableOpacity>
        <MyTouchableOpacity variant="fill" onPress={_onNavigateRegister}>
          Join Now
        </MyTouchableOpacity>
      </View>
      <MyAppText styles={styles.textAzure} fontWeight="light">
        Sign in with
        <MyAppText fontWeight="medium"> Azure AD</MyAppText>
      </MyAppText>
    </View>
  );
};

const styles = StyleSheet.create({
  ctaContainer: {
    gap: 27,
  },
  btnGroup: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAzure: {
    color: colors.textColor,
    textAlign: 'center',
    fontSize: 16.45,
  },
});

export default Cta;
