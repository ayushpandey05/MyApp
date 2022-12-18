import React, {FC} from 'react';
import {
  View,
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface ColumnProps extends TouchableOpacityProps {
  touch?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
}

const Column: FC<ColumnProps> = ({
  touch,
  alignCenter,
  justifyCenter,
  style,
  ...restProps
}) => {
  const Component: any = touch ? TouchableOpacity : View;
  const mergedStyles: any = [
    alignCenter && styles.alignCenter,
    justifyCenter && styles.justifyCenter,
    style,
  ];
  return <Component style={mergedStyles} {...restProps} />;
};

export {Column};
export type {ColumnProps};

const styles = StyleSheet.create({
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
});
