import React from 'react';
import {Column, Text} from '@app/core';
import { navigationType, useNavigation } from '@app/stack-navigator';
import { FC } from 'react';
import { Header } from '@app/common/header';

interface Props {
  navigation: navigationType,
  route: any
}

const Home: FC<Props> = ({route}) => {

  const navigation = useNavigation()

  const pushOneScreen = () => {
    navigation.push('login');
    navigation.push('login');
  };

  const popTwoThenPush = () => {
    navigation.popAndPush(2, 'login');
  };

  const goBack = navigation.goBack

const popScreen = ()=>{
  navigation.pop(2)
}

  return (
    <Column
      style={{flex: 1}}
    >
      <Header title='Home Screen' />
      <Text style={{fontSize: 24, fontWeight: '700'}}>
        {route.screenIndex + 1}
      </Text>

      <Column touch onPress={pushOneScreen}>
        <Text>Open 1 screen</Text>
      </Column>
      <Column touch onPress={popTwoThenPush}>
        <Text>Pop 2 Open 1 screen</Text>
      </Column>
      <Column touch onPress={goBack} >
        <Text>Go back</Text>
      </Column>
      <Column touch onPress={popScreen} >
        <Text>Pop 2 screen</Text>
      </Column>
    </Column>
  );
};

export {Home};
