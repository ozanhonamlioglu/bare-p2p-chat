import { ActivityIndicator, Pressable, StyleSheet, View } from 'react-native';
import React, { useCallback, useState } from 'react';
import { cls } from 'ui/component/styles';
import TextInput from 'ui/component/TextInput';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Ionicons from '@expo/vector-icons/Ionicons';
import colorFromPalette from 'ui/component/styles/palette';
import { makeSize } from 'ui/component/styles/utils';
import useKeyboardStatus from 'hook/useKeyboardStatus';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useBackend } from 'ui/component/BareProvider';

/**
 *
 * @param {{onMessageSent: (msg: string, local: boolean) => void}} props
 * @returns
 */
const MessageBox = ({ onMessageSent }) => {
  const backend = useBackend();
  const keyboardStatus = useKeyboardStatus();
  const insets = useSafeAreaInsets();
  const [isFocused, setFocusStatus] = useState(false);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSendMessage = useCallback(() => {
    const trimmedText = text.trim();
    if (trimmedText) {
      setLoading(true);
      backend.sendMessage(trimmedText, (msg, local) => {
        setLoading(false);
        setText('');
        onMessageSent(msg, local);
      });
    }
  }, [text]);

  const activeSpace = !keyboardStatus ? insets.bottom || 5 : 0;
  const dynamicBorderColor = isFocused ? colorFromPalette('sky.500') : colorFromPalette('sky.900');

  return (
    <View style={cls('w_full', 'p3', { marginBottom: activeSpace })}>
      <View
        style={cls('w_full', 'direction_row', 'p1', 'center', styles.box, {
          borderColor: dynamicBorderColor,
        })}
      >
        <View style={cls('center', styles.files)}>
          <AntDesign name="plus" size={20} color={colorFromPalette('neutral.50')} />
        </View>
        <TextInput
          tokens={['flex_1', styles.input]}
          cursorColor={colorFromPalette('neutral.50')}
          multiline
          value={text}
          onChangeText={(t) => setText(t)}
          onFocus={() => setFocusStatus(true)}
          onBlur={() => setFocusStatus(false)}
        />
        <View style={cls('direction_row', styles.endButtons)}>
          <FontAwesome5 name="smile-wink" size={20} color={colorFromPalette('neutral.400')} />
          <Pressable onPress={handleSendMessage} disabled={loading}>
            {loading ? (
              <ActivityIndicator size={'small'} />
            ) : (
              <Ionicons name="send" size={20} color={colorFromPalette('neutral.50')} />
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    minHeight: makeSize(10),
    borderRadius: makeSize(10),
    borderWidth: 1,
    gap: makeSize(1.5),
  },
  input: {
    borderWidth: 0,
    color: colorFromPalette('neutral.50'),
    minHeight: makeSize(10),
    maxHeight: makeSize(50),
    fontSize: makeSize(4),
    paddingHorizontal: makeSize(2),
    textAlignVertical: 'center',
  },
  files: {
    width: makeSize(10),
    height: makeSize(10),
    borderRadius: makeSize(10),
    backgroundColor: colorFromPalette('gray.600'),
  },
  endButtons: {
    gap: makeSize(3),
    marginEnd: makeSize(2),
  },
});

export default React.memo(MessageBox);
