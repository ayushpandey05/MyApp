import React, {FC} from 'react';
import {
  View,
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

interface RowProps extends TouchableOpacityProps {
  touch?: boolean;
  alignCenter?: boolean;
  justifyCenter?: boolean;
}

const Row: FC<RowProps> = ({
  touch,
  alignCenter,
  justifyCenter,
  style,
  ...restProps
}) => {
  let Component: any = touch ? TouchableOpacity : View;

  let mergedStyles: any = [
    styles.container,
    alignCenter && styles.alignCenter,
    justifyCenter && styles.justifyCenter,
    style,
  ];

  return <Component style={mergedStyles} {...restProps} />;
};

export {Row};
export type {RowProps};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  alignCenter: {
    alignItems: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
});
