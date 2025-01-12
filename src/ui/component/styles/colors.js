import { StyleSheet } from 'react-native';

import colorFromPalette from './palette';

const colors = StyleSheet.create({
  primary_bg_color: {
    backgroundColor: colorFromPalette('primary.800'),
  },
  primary_text_color: {
    color: colorFromPalette('primary.800'),
  },
  on_primary_text_color: {
    color: '#fff',
  },
  white_bg_color: {
    backgroundColor: '#fff',
  },
});

export default colors;
