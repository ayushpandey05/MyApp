import React from 'react';
import {Column, Text} from '@app/core';
import { Header } from '@app/common/header';

const Login = ({navigation, route}) => {
  const pushOneScreen = () => {
    navigation.push('home');
    navigation.push('home');
  };

  const popTwoThenPush = () => {
    navigation.popAndPush(2, 'home');
  };

  const goBack = navigation.goBack;

  return (
    <Column style={{flex: 1 }}>
      <Header title='Login Screen' />
      <Text style={{fontSize: 24, fontWeight: '700'}}>
        {route.screenIndex + 1}
      </Text>

      <Column touch onPress={pushOneScreen}>
        <Text>Open 1 screen</Text>
      </Column>
      <Column touch onPress={popTwoThenPush}>
        <Text>Pop 2 Open 1 screen</Text>
      </Column>
      <Column touch onPress={goBack}>
        <Text>Go back</Text>
      </Column>
    </Column>
  );
};

export {Login};
