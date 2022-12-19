import React from 'react';
import {Column} from '@app/core';
import {createStackNavigator} from '@app/stack-navigator';
import {Login} from '@app/screens/login';
import {Signup} from '@app/screens/signup';
import {Home} from '@app/screens/home';

const RootStack = createStackNavigator({
  screens: {
    login: {
      title: 'Login',
      screen: Login,
    },
    signup: {
      title: 'Signup',
      screen: Signup,
    },
    home: {
      title: 'Home',
      screen: Home,
    },
  },
});

const MyApp = () => {
  return (
    <Column style={{flex: 1}}>
      {/* <Row></Row> */}
      <RootStack />
    </Column>
  );
};

export default MyApp;
