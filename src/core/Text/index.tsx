import React, {FC} from 'react';
import {TextProps as TP, Text as TextNative} from 'react-native';

type TextProps = TP;

const Text: FC<TextProps> = props => {
  return <TextNative {...props} />;
};

export {Text};
export type {TextProps};
