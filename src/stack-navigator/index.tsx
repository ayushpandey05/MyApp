import {Column} from '@app/core';
import React, {memo} from 'react';
import {useNavigator} from './useNavigator';
import {navigationType} from './navigator-types';
import {WithBackHandler} from './WithBackHandler';
import {useNavigation} from './useNavigation';
import {AnimatedView} from './AnimatedContainer/AnimatedView';
import {AnimatedModal} from './AnimatedContainer/AnimatedModal';
import {ComponentType} from '@app/types';

type visibleProp = () => boolean;

interface screensType {
  [screenName: string]: {
    screen: ComponentType;
    title: string;
    visible?: boolean | visibleProp;
  };
}

interface stackNavigatorProps {
  screens: screensType;
}

const getInitialScreen = (screenName: string, screens: screensType) => {
  let initialScreen: any = {...screens[screenName], screenName};
  delete initialScreen?.screen;

  return initialScreen;
};

const createStackNavigator = ({screens}: stackNavigatorProps) =>
  memo((props: any) => {
    const screenKeys = Object.keys(screens);

    const {navigatorState, getNavigation, getRoute} = useNavigator({
      stack: [getInitialScreen(screenKeys[0], screens)],
    });

    return (
      <Column style={{flex: 1}}>
        {Array.isArray(navigatorState.stack) ? (
          navigatorState.stack.map((screen: any, screenIndex: number) => {
            const {screenName, modal} = screen || {};
            const ScreenComponent: any = WithBackHandler(
              screens[screenName].screen,
            );

            const navigation = getNavigation(screenIndex);
            const route = getRoute(screenIndex);

            const AnimComponent = modal ? AnimatedModal : AnimatedView;

            return (
              <AnimComponent
                key={`anim-container-${screenIndex}`}
                route={route}>
                <ScreenComponent
                  {...props}
                  key={`screen-${screenIndex}`}
                  navigation={navigation}
                  route={route}
                />
              </AnimComponent>
            );
          })
        ) : (
          <></>
        )}
      </Column>
    );
  });

export {createStackNavigator, useNavigation};
export type {navigationType};
