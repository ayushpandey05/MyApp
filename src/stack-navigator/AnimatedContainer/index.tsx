import React from 'react';
import {AnimatedModal} from './AnimatedModal';
import {AnimatedView} from './AnimatedView';

const AnimatedContainer = (Component: any) => (props: any) => {
  const {route} = props || {};
  const {screenIndex, modal, modalBackdrop} = route || {};

  const AnimatedComponent = modal ? AnimatedModal : AnimatedView;

  return (
    <AnimatedComponent screenIndex={screenIndex} modalBackdrop={modalBackdrop}>
      <Component {...props} />
    </AnimatedComponent>
  );
};

export {AnimatedContainer};
