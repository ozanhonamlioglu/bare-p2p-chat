// The reason to create custom small styling library is to keep everything simple.
// Trying to stay away from over engineering.

import alignment from './alignment';
import colors from './colors';
import shape from './shape';
import font from './font';
import size from './size';
import space from './space';

const _styles = { ...alignment, ...colors, ...shape, ...font, ...size, ...space };

/**
 * @typedef {import('react-native').ImageStyle | import('react-native').TextStyle | import('react-native').ViewStyle | keyof _styles} StyleToken
 */

/**
 * @param {StyleToken[]} tokens
 * @description cls function glues all tokens and produces single style array.
 */
export const cls = (...tokens) => {
  return tokens.map((x) => {
    if (typeof x === 'string') {
      return _styles[x];
    }

    return x;
  });
};
