import { Text as RNText } from 'react-native';
import React from 'react';
import { cls } from './styles';

/**
 *
 * @param {{tokens?: import('./styles').StyleToken[], children: any}} props
 */
const Text = ({ children, tokens = [] }) => {
  return <RNText style={cls('text_family', ...tokens)}>{children}</RNText>;
};

export default Text;
