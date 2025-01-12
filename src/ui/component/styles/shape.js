import { StyleSheet } from 'react-native';

import { makeSize } from './utils';

const shape = StyleSheet.create({
  border_radius_standart: {
    borderRadius: makeSize(2),
  },
  border_radius_md: {
    borderRadius: makeSize(1.5),
  },
  border_radius_small: {
    borderRadius: makeSize(1),
  },
});

export default shape;
