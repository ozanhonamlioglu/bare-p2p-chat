import { TouchableOpacity, View, ActivityIndicator, StyleSheet } from 'react-native';
import React from 'react';
import { cls } from './styles';

/**
 *
 * @param {{tokens?: import('./styles').StyleToken[], children?: any, isLoading?: boolean} & import('react-native').TouchableOpacityProps} props
 */
const Button = ({ tokens = [], children, isLoading, ...rest }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} {...rest}>
      <View style={cls('direction_row', 'button_height', styles.content, ...tokens)}>
        {children}
        {isLoading && <ActivityIndicator size={'small'} />}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  content: {
    gap: 5,
  },
});

export default Button;
