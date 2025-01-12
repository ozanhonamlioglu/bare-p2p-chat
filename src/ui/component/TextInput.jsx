import { TextInput as RNTextInput, StyleSheet } from 'react-native';
import React from 'react';
import { cls } from './styles';
import colorFromPalette from './styles/palette';
import { makeSize } from './styles/utils';

/**
 *
 * @param {{tokens?: import('./styles').StyleToken[]} & import('react-native').TextInputProps} props
 */
const TextInput = ({ tokens = [], ...rest }) => {
  return (
    <RNTextInput
      style={cls(styles.default, 'border_radius_md', 'text_family', ...tokens)}
      {...rest}
    />
  );
};

const styles = StyleSheet.create({
  default: {
    borderWidth: 1,
    borderColor: colorFromPalette('gray.400'),
    padding: makeSize(3),
  },
});

export default TextInput;
