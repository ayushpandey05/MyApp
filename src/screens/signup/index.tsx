import React from 'react';
import {Column} from '@app/core';
import {Header} from '@app/common/header';

const Signup = () => {
  return (
    <Column style={{flex: 1, justifyContent: 'flex-end'}}>
      <Column style={{flex: 0.6, backgroundColor: 'white'}}>
        <Header title="Signup Screen" />
        <Column></Column>
      </Column>
    </Column>
  );
};

export {Signup};
