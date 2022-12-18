import {Column} from '@app/core';
import React, {memo, useEffect, useRef} from 'react';
import {Animated, StyleSheet, useWindowDimensions} from 'react-native';

const AnimView = Animated.View;

const AnimatedView = memo((props: any) => {
  const {children, route} = props || {};
  const {screenIndex, currentScreenIndex} = route || {};
  const {width} = useWindowDimensions();

  const animValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, []);

  const animStyle = {
    transform: [
      {
        translateX: animValue.interpolate({
          inputRange: [0, 1],
          outputRange: [width, 0],
        }),
      },
    ],
  };

  return (
    <AnimView style={[styles.container, screenIndex > 0 && animStyle]}>
      {children}
      {screenIndex !== currentScreenIndex ? (
        <Column style={styles.fadeContainer}></Column>
      ) : (
        <></>
      )}
    </AnimView>
  );
});

export {AnimatedView};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'absolute',
    width: '100%',
    height: '100%',
    // elevation: 5
  },
  fadeContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});
