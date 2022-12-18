import {createContext, useContext} from 'react';
import {navigationType} from './navigator-types';

const NavigationContext = createContext(<navigationType>{});

const useNavigation = () => {
  const navigation = useContext(NavigationContext);

  return navigation;
};

export {useNavigation, NavigationContext};
