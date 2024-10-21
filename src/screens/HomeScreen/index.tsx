import React from 'react';
import {View} from 'react-native';
import MyAppText from '../../components/MyAppText';
import MyTouchableOpacity from '../../components/MyTouchableOpacity';
import {logoutUser} from '../../store/slices/authSlice';
import {useAppDispatch} from '../../store/store';
import {tokenMethod} from '../../utils/tokenMethod';

const HomeScreen = () => {
  const dispatch = useAppDispatch();
  const _onPress = async () => {
    dispatch(logoutUser({}));
    console.log(await tokenMethod.getData());
  };
  return (
    <View>
      <MyAppText>Homescreen</MyAppText>
      <MyTouchableOpacity onPress={_onPress}>Logout</MyTouchableOpacity>
    </View>
  );
};

export default HomeScreen;
