import { StyleSheet } from 'react-native';
import { makeSize } from './utils';

const sizing = StyleSheet.create({
  w_auto: {
    width: 'auto',
  },
  w_full: {
    width: '100%',
  },
  w_half: {
    width: '50%',
  },
  h_full: {
    height: '100%',
  },
  h_half: {
    height: '50%',
  },
  flex_1: {
    flex: 1,
  },
  button_height: {
    height: makeSize(12),
  },
});

export default sizing;
