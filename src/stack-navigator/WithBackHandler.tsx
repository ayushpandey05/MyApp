import React from 'react';
import {Column} from '@app/core';
import {StyleSheet} from 'react-native';
import {navigationType, routeType} from './navigator-types';
import {useBackButton} from '@app/hooks';
import {NavigationContext} from './useNavigation';
import {ComponentType} from '@app/types';

const WithBackHandler =
  (Component: ComponentType) =>
  (props: {navigation: navigationType; route: routeType}) => {
    const {navigation, route} = props || {};
    const {screenIndex} = route || {};

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBackButton(() => {
      navigation.goBack();

      if (screenIndex + 1 > 1) {
        return true;
      }
      return false;
    });

    return (
      <Column style={styles.container}>
        <NavigationContext.Provider value={navigation}>
          <Component {...props} />
        </NavigationContext.Provider>
      </Column>
    );
  };

export {WithBackHandler};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
});
