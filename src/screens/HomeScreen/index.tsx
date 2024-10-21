import React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import MyAppText from '../../components/MyAppText';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';
import {logoutUser} from '../../store/slices/authSlice';
import {useAppDispatch} from '../../store/store';
import {colors} from '../../styles/colorStyle';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const _onPress = async () => {
    dispatch(logoutUser({}));
  };
  return (
    <View style={styles.container}>
      <View style={styles.popup}>
        <SafeAreaView>
          <MyAppText>Homescreen</MyAppText>
          <MyTouchableOpacity style={{flex: 0}} onPress={_onPress}>
            Logout
          </MyTouchableOpacity>
        </SafeAreaView>
      </View>
      <View style={styles.backdrop}></View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    position: 'absolute',
    width: '100%',
    height: 326,
    backgroundColor: colors.whiteColor,
    zIndex: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    backgroundColor: 'rgba(48, 62, 101, 0.4)',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 0,
  },
});
