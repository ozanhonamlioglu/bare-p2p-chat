import { View, StyleSheet } from 'react-native';
import React from 'react';
import { cls } from 'ui/component/styles';
import colorFromPalette from 'ui/component/styles/palette';
import Feather from '@expo/vector-icons/Feather';
import Text from 'ui/component/Text';

/**
 *
 * @param {{ data: {id: string, message: any, timestamp: Date, local: boolean} }} props
 * @returns
 */
const MessageBubble = ({ data }) => {
  const memberPreLetter = data.memberId?.[0];
  const showIndicator = data.showIndicator;

  return (
    <View
      style={cls(
        'w_full',
        'p2',
        data.local ? styles.meMessage : styles.youMessage,
        styles.recyclerAdaptation
      )}
    >
      <View style={cls({ gap: 5, flexDirection: data.local ? 'row' : 'row-reverse' })}>
        <View style={cls('p2', styles.bubble, data.local ? styles.meBublle : styles.youBubble)}>
          <Text tokens={[data.local ? 'text_right' : 'text_left', 'on_primary_text_color']}>
            {data.message}
          </Text>
        </View>
        {showIndicator ? (
          <View style={cls('center', styles.indicator)}>
            {data.local ? (
              <Feather name="user" size={12} color={colorFromPalette('neutral.50')} />
            ) : (
              <Text tokens={['on_primary_text_color', 'text_size_xs']}>{memberPreLetter}</Text>
            )}
          </View>
        ) : (
          <View style={styles.emptyIndicator} />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  emptyIndicator: {
    width: 20,
  },
  indicator: {
    width: 20,
    height: 20,
    borderRadius: 20,
    backgroundColor: colorFromPalette('neutral.500'),
  },
  meMessage: {
    alignItems: 'flex-end',
    alignContent: 'flex-end',
  },
  youMessage: {
    alignItems: 'flex-start',
  },
  bubble: {
    backgroundColor: colorFromPalette('sky.900'),
    minWidth: 60,
    maxWidth: '50%',
  },
  meBublle: {
    borderRadius: 10,
    borderTopEndRadius: 0,
  },
  youBubble: {
    borderRadius: 10,
    borderTopStartRadius: 0,
  },
  recyclerAdaptation: {
    transform: [{ scaleY: -1 }],
  },
});

export default React.memo(MessageBubble);
