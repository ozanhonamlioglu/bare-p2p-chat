import { StyleSheet } from 'react-native';

import { makeSize } from './utils';

const spacing = StyleSheet.create({
  p1: {
    padding: makeSize(1),
  },
  p1_5: {
    padding: makeSize(1.5),
  },
  p2: {
    padding: makeSize(2),
  },
  p3: {
    padding: makeSize(3),
  },
  p4: {
    padding: makeSize(4),
  },
});

export default spacing;
