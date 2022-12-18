import {Column} from '@app/core';
import React from 'react';
import {useState} from 'react';
import {useNavigator} from './useNavigator';
import {navigationType} from './navigator-types';
import {WithBackHandler} from './WithBackHandler';
import {useNavigation} from './useNavigation';

type visibleProp = () => boolean;
type screenProp = (props: any) => JSX.Element;

interface screensType {
  [screenName: string]: {
    screen: screenProp;
    title: string;
    visible?: boolean | visibleProp;
  };
}

interface stackNavigatorProps {
  screens: screensType;
}

const initialState = {
  screen: '',
};

const getInitialState = (screen: string) => {
  return {
    screen,
  };
};

const getInitialScreen = (screenName: string, screens: screensType) => {
  let initialScreen: any = {...screens[screenName], screenName};
  delete initialScreen?.screen;

  return initialScreen;
};

const createStackNavigator =
  ({screens}: stackNavigatorProps) =>
  (props: any) => {
    const screenKeys = Object.keys(screens);

    const {navigatorState, getNavigation, getRoute} = useNavigator({
      stack: [getInitialScreen(screenKeys[0], screens)],
    });

    return (
      <Column style={{flex: 1}}>
        {Array.isArray(navigatorState.stack) ? (
          navigatorState.stack.map((screen: any, screenIndex: number) => {
            const {screenName} = screen || {};
            const ScreenComponent: any = WithBackHandler(
              screens[screenName].screen,
            );

            const navigation = getNavigation(screenIndex);
            const route = getRoute(screenIndex);
            return (
              <Column
                key={`container-${screenIndex}`}
                style={{
                  position: 'absolute',
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'white',
                }}>
                <ScreenComponent
                  key={`screen-${screenIndex}`}
                  navigation={navigation}
                  route={route}
                />
              </Column>
            );
          })
        ) : (
          <></>
        )}
      </Column>
    );
  };

export {createStackNavigator, useNavigation};
export type {navigationType};
