import {Column, Row, Text} from '@app/core';
import {useNavigation} from '@app/stack-navigator';
import React from 'react';

const Header = ({title}: {title: string}) => {
  const navigation = useNavigation();

  return (
    <Row alignCenter style={{alignItems: 'center'}}>
      <Column
        alignCenter
        justifyCenter
        style={{width: 36, height: 36}}
        touch
        onPress={navigation.goBack}>
        <Text style={{fontSize: 24, fontWeight: '700'}}>{'<'}</Text>
      </Column>
      <Column style={{marginLeft: 24}}>
        <Text>{title}</Text>
      </Column>
    </Row>
  );
};

export {Header};
