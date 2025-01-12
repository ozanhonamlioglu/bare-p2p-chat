import { StyleSheet } from 'react-native';

import { makeSize } from './utils';

const font = StyleSheet.create({
  text_family: {
    fontFamily: 'OpenSans',
  },
  text_bold: {
    fontWeight: 'bold',
  },
  text_size_sm: {
    fontSize: makeSize(3.5),
  },
  text_size_xs: {
    fontSize: makeSize(3),
  },
  text_size_md: {
    fontSize: makeSize(4),
  },
  text_size_lg: {
    fontSize: makeSize(4.5),
  },
  text_align_center: {
    textAlign: 'center',
  },
});

export default font;
