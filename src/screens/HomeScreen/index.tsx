import React, {useState} from 'react';
import {NativeScrollEvent, StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WELCOME_DATA} from '../../constants/staticsData';
import {colors} from '../../styles/colorStyle';
import {PATH} from '../../constants/path';
import Cta from './components/Cta';
import Welcome from './components/Welcome';

type HomeScreenType = {
  navigation: any;
};

const HomeScreen = ({navigation}: HomeScreenType) => {
  const [currentWelcomeIndex, setCurrentWelcomeIndex] = useState(0);
  const handleScroll = (nativeEvent: NativeScrollEvent) => {
    const {
      contentOffset: {x: scrollXPosition},
      layoutMeasurement: {width: layoutWidth},
    } = nativeEvent;
    const welcomeIndex = Math.abs(Math.round(scrollXPosition / layoutWidth));
    setCurrentWelcomeIndex(welcomeIndex);
  };
  const handleLogin = () => {
    navigation.navigate(PATH.LOGIN);
  };
  const handleRegister = () => {
    navigation.navigate(PATH.REGISTER);
  };
  return (
    <View style={{backgroundColor: colors.whiteColor}}>
      <SafeAreaView style={[styles.container]}>
        <Welcome
          data={WELCOME_DATA}
          currentIndex={currentWelcomeIndex}
          handleScroll={handleScroll}
        />
        <Cta handleLogin={handleLogin} handleRegister={handleRegister} />
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'space-between',
    height: '100%',
    gap: 16,
    paddingBottom: 32,
  },
});
export default HomeScreen;
