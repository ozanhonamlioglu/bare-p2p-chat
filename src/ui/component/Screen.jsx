import { View } from 'react-native';
import React from 'react';
import { cls } from './styles';

/**
 *
 * @param {{tokens?: import('./styles').StyleToken[], children: any}} props
 */
const Screen = ({ tokens = [], children }) => {
  return <View style={cls('flex_1', ...tokens)}>{children}</View>;
};

export default Screen;
