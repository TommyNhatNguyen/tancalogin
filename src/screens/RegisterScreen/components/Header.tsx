import React from 'react';
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {PATH} from '../../../constants/path';
const logo = require('../../../assets/images/logo.png');
const exitIcon = require('../../../assets/images/exit-icon.png');
const dropDownIcon = require('../../../assets/images/dropdown-icon.png');
const flagIcon = require('../../../assets/images/flag-icon.png');
type HeaderType = {
  containerStyles?: ViewStyle;
  navigation: any;
} & ViewProps;

const Header = ({containerStyles, navigation, ...props}: HeaderType) => {
  const _onExit = () => {
    navigation.navigate(PATH.WELCOME);
  };
  const _onDropDown = () => {};
  return (
    <View style={[containerStyles, styles.container]} {...props}>
      <View style={styles.topContainer}>
        <TouchableOpacity style={[styles.exitIcon]} onPress={_onExit}>
          <Image source={exitIcon} />
        </TouchableOpacity>
        <TouchableOpacity onPress={_onDropDown}>
          <View style={styles.languageContainer}>
            <Image source={dropDownIcon} style={styles.dropDownIcon} />
            <Image source={flagIcon} />
          </View>
        </TouchableOpacity>
      </View>
      <Image source={logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    position: 'relative',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 20,
  },
  languageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  exitIcon: {
    width: 16,
    height: 16,
    objectFit: 'contain',
  },
  dropDownIcon: {
    width: 12,
    height: 12,
    objectFit: 'contain',
  },
  flagIcon: {
    width: 12,
    height: 12,
    objectFit: 'contain',
  },
});

export default Header;
