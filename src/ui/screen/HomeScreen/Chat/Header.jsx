import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { useCallback, useState } from 'react';
import useTopic from 'hook/useTopic';
import { cls } from 'ui/component/styles';
import colorFromPalette from 'ui/component/styles/palette';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Text from 'ui/component/Text';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { makeSize } from 'ui/component/styles/utils';
import Feather from '@expo/vector-icons/Feather';
import * as Clipboard from 'expo-clipboard';

const Header = () => {
  const { topic, peerCount } = useTopic();
  const insets = useSafeAreaInsets();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = useCallback(async () => {
    await Clipboard.setStringAsync(topic);
    setCopied(true);
  }, [topic]);

  const copyColor = copied ? colorFromPalette('green.500') : colorFromPalette('neutral.50');
  return (
    <View style={cls('w_full', styles.container)}>
      <View style={cls('w_full', { height: insets.top })} />
      <View style={cls('p3', 'center', 'w_full', 'direction_row', styles.header)}>
        <View style={cls('flex_1')} />
        <TouchableOpacity onPress={copyToClipboard}>
          <View style={cls('direction_row', 'flex_1', { gap: 2 })}>
            <Text tokens={['on_primary_text_color', { color: copyColor }]}>
              {topic.slice(0, 10)}...
            </Text>
            {copied ? (
              <FontAwesome6 name="clipboard-check" size={16} color={copyColor} />
            ) : (
              <MaterialIcons name="content-copy" size={16} color={copyColor} />
            )}
          </View>
        </TouchableOpacity>
        <View style={cls('flex_1', styles.rightContent)}>
          <View style={cls('direction_row', { gap: 2 })}>
            <Feather name="user" size={16} color={colorFromPalette('neutral.50')} />
            <Text tokens={['on_primary_text_color']}>{peerCount}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colorFromPalette('primary.900'),
  },
  header: {
    height: makeSize(10),
  },
  rightContent: {
    alignItems: 'flex-end',
  },
});

export default React.memo(Header);
