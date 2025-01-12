import React, { useCallback, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Button from 'ui/component/Button';
import Modal from 'ui/component/Modal';
import { cls } from 'ui/component/styles';
import { makeSize } from 'ui/component/styles/utils';
import Text from 'ui/component/Text';
import TextInput from 'ui/component/TextInput';
import { useBackend } from 'ui/component/BareProvider';
import useTopic from 'hook/useTopic';
import colorFromPalette from 'ui/component/styles/palette';

/**
 *
 * @param {{ visible: boolean }} props
 * @returns
 */
const CreateOrJoinModal = ({ visible }) => {
  const backend = useBackend();
  const [hash, setHash] = useState('');
  const [status, setStatus] = useState({
    loading: false,
    errorText: '',
  });
  const { updateTopic } = useTopic();

  const handleCreate = useCallback(
    () =>
      backend.createRoom((t, done) => {
        setStatus((x) => ({ ...x, loading: false, errorText: !done ? 'Create failed!' : '' }));
        if (done) updateTopic(t);
      }),
    [backend]
  );

  const handleJoin = useCallback(
    (_hash) => {
      const trimmedHash = _hash.replace('Topic: ', '');
      backend.joinRoom(trimmedHash, (t, done) => {
        setStatus((x) => ({ ...x, loading: false, errorText: !done ? 'Joining failed!' : '' }));
        if (done) updateTopic(t);
      });
    },
    [backend]
  );

  const onAction = useCallback(() => {
    setStatus((x) => ({ ...x, loading: true }));

    if (hash.trim()) {
      handleJoin(hash);
      return;
    }

    // Or create room
    handleCreate();
  }, [hash]);

  return (
    <Modal visible={visible}>
      <View style={cls('flex_1', 'center', styles.container)}>
        <View
          style={cls(
            'p3',
            'white_bg_color',
            'border_radius_md',
            'w_full',
            'direction_col',
            styles.content
          )}
        >
          <View style={cls('direction_col', { gap: 1 })}>
            <TextInput placeholder="Join in a Room" onChangeText={setHash} autoComplete="off" />
            {!status.loading && status.errorText && (
              <Text tokens={['text_size_xs', { color: colorFromPalette('red.500') }]}>
                {status.errorText}
              </Text>
            )}
          </View>
          <Button
            tokens={['primary_bg_color', 'center', 'border_radius_md']}
            onPress={onAction}
            isLoading={status.loading}
            disabled={status.loading}
          >
            <Text tokens={['on_primary_text_color', 'text_size_md']}>
              {hash.trim() ? 'Join Room' : 'Or Create a Room'}
            </Text>
          </Button>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: makeSize(8),
  },
  content: {
    gap: 10,
  },
});

export default React.memo(CreateOrJoinModal);
