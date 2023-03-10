import {Column} from '@app/core';
import React, {memo, useEffect, useRef} from 'react';
import {Animated, StyleSheet, useWindowDimensions} from 'react-native';

const AnimView = Animated.View;

const AnimatedModal = memo((props: any) => {
  const {children, route} = props || {};

  const {screenIndex, currentScreenIndex, modalBackdrop} = route || {};

  const animValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animValue, {
      toValue: 1,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, []);

  const opacity = animValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 1],
  });

  const animStyle = {
    backgroundColor: modalBackdrop,
    opacity,
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

export {AnimatedModal};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  fadeContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
});
