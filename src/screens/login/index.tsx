import React from 'react';
import {Column, Text} from '@app/core';
import {Header} from '@app/common/header';
import {StyleSheet} from 'react-native';

const Login = ({navigation, route}) => {
  const {modal} = route || {};

  const pushOneScreen = () => {
    navigation.push({
      screen: 'home',
    });
    navigation.push({
      screen: 'home',
    });
  };

  const popTwoThenPush = () => {
    navigation.popAndPush({
      screenToPop: 2,
      screen: 'home',
    });
  };

  const goBack = navigation.goBack;

  return (
    <Column style={{flex: 1, ...(modal && {justifyContent: 'flex-end'})}}>
      <Column style={[modal && styles.modalContainer]}>
        <Header title="Login Screen" />
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
    </Column>
  );
};

export {Login};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    flex: 0.7,
  },
});
