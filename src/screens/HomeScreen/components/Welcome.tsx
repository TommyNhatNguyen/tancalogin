import React from 'react';
import {NativeScrollEvent, ScrollView, StyleSheet, View} from 'react-native';
import WelcomeComponent from '../../../components/WelcomeComponent';
import {colors} from '../../../styles/colorStyle';
import {WelcomeDataType} from '../../../types/WelcomeDataType';

type WelcomeType = {
  data: WelcomeDataType[];
  currentIndex: number;
  handleScroll: (nativeEvent: NativeScrollEvent) => void;
};

const Welcome = ({data, currentIndex, handleScroll}: WelcomeType) => {
  const _onScroll = ({nativeEvent}: {nativeEvent: NativeScrollEvent}) => {
    handleScroll(nativeEvent);
  };
  return (
    <View style={styles.welcomeContainter}>
      <ScrollView
        pagingEnabled
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        onScroll={_onScroll}>
        {data.map(item => {
          return <WelcomeComponent key={item.content} {...item} />;
        })}
      </ScrollView>
      <View style={styles.dotsContainer}>
        {Array(data.length)
          .fill('')
          .map((_, index) => {
            const dotStyle = StyleSheet.flatten([
              styles.dot,
              index === currentIndex && styles.dotActive,
            ]);
            return <View style={dotStyle} key={index}></View>;
          })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dotsContainer: {
    height: 8,
    gap: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    // position: 'absolute',
    // bottom: 110,
    // left: '50%',
    // transform: 'translateX(-50%)',
  },
  dot: {
    height: '100%',
    width: 8,
    backgroundColor: colors.secondColor,
    borderRadius: 100000,
  },
  dotActive: {
    backgroundColor: colors.mainColor,
  },
  container: {
    justifyContent: 'space-between',
    height: '100%',
    gap: 16,
    backgroundColor: colors.whiteColor,
  },
  welcomeContainter: {
    flex: 1,
    position: 'relative',
  },
  contentContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    maxHeight: 'auto',
  },
});

export default Welcome;
