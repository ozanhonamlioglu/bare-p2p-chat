import { StyleSheet } from 'react-native';

const alignment = StyleSheet.create({
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  absolute: {
    position: 'absolute',
  },
  direction_row: {
    flexDirection: 'row',
  },
  direction_col: {
    flexDirection: 'column',
  },
  text_left: {
    textAlign: 'left',
  },
  text_right: {
    textAlign: 'right',
  },
});

export default alignment;
