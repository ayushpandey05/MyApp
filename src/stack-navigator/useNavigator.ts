import {useState} from 'react';

const useNavigator = (initialState: any) => {
  const [navigatorState, setNavigatorState] = useState(initialState);

  const getNavigation = (screenIndex: number) => {
    const push = (screenName: string, params: any) => {
      if (typeof screenName === 'string') {
        const currentStack = Array.isArray(navigatorState.stack)
          ? [...navigatorState.stack]
          : [];
        currentStack[screenIndex + 1] = {
          screenName,
          params,
        };

        setNavigatorState((old: any) => ({
          ...old,
          stack: currentStack,
        }));
      }
    };

    const popAndPush = (
      screenToPop: number = 0,
      screenName: string,
      params: any,
    ) => {
      let currentStack = Array.isArray(navigatorState.stack)
        ? [...navigatorState.stack]
        : [];

      if (
        typeof screenToPop === 'number' &&
        screenToPop <= screenIndex + 1 &&
        screenToPop <= currentStack.length &&
        typeof screenName === 'string'
      ) {
        currentStack = currentStack.splice(0, screenIndex - (screenToPop - 1));
        currentStack[screenIndex - (screenToPop - 1)] = {
          screenName,
          params,
        };
        setNavigatorState((old: any) => ({
          ...old,
          stack: currentStack,
        }));
      }
    };

    const goBack = () => {
      const currentStack = Array.isArray(navigatorState.stack)
        ? [...navigatorState.stack]
        : [];
      if (currentStack.length > 1 && screenIndex + 1 > 1) {
        currentStack.splice(screenIndex, 1);
        setNavigatorState((old: any) => ({
          ...old,
          stack: currentStack,
        }));
      }
    };

    const replace = (screenName: string, params: any) => {
      if (typeof screenName === 'string') {
        const currentStack = Array.isArray(navigatorState.stack)
          ? [...navigatorState.stack]
          : [];
        currentStack[screenIndex] = {
          screenName,
          params,
        };

        setNavigatorState((old: any) => ({
          ...old,
          stack: currentStack,
        }));
      }
    };

    const pop = (screenToPop: number = 0) => {
      let currentStack = Array.isArray(navigatorState.stack)
        ? [...navigatorState.stack]
        : [];

      if (
        typeof screenToPop === 'number' &&
        screenToPop < screenIndex + 1 &&
        screenToPop < currentStack.length
      ) {
        currentStack = currentStack.splice(0, screenIndex + 1 - screenToPop);
        setNavigatorState((old: any) => ({
          ...old,
          stack: currentStack,
        }));
      }
    };

    return {
      push,
      popAndPush,
      goBack,
      replace,
      pop,
    };
  };

  const getRoute = (screenIndex: number) => {
    const currentStack = Array.isArray(navigatorState.stack)
      ? [...navigatorState.stack]
      : [];

    return {...currentStack[screenIndex], screenIndex};
  };

  return {navigatorState, getNavigation, getRoute};
};

export {useNavigator};
