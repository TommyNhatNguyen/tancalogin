import {useState} from 'react';
import {NativeScrollEvent, StyleSheet, View} from 'react-native';
import {PATH} from '../../constants/path';
import {SafeAreaView} from 'react-native-safe-area-context';
import Welcome from './components/Welcome';
import {WELCOME_DATA} from '../../constants/staticsData';
import Cta from './components/Cta';
import {colors} from '../../styles/colorStyle';

type WelcomeScreenType = {
  navigation: any;
};

const WelcomeScreen = ({navigation}: WelcomeScreenType) => {
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
    <View style={styles.container}>
      <SafeAreaView style={[styles.contentContainer]}>
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
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  contentContainer: {
    flex: 1,
    paddingBottom: 33,
    gap: 80,
    justifyContent: 'space-between',
  },
});
export default WelcomeScreen;
