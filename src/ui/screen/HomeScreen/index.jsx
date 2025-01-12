import { KeyboardAvoidingView, Platform } from 'react-native';

import { cls } from 'ui/component/styles';
import CreateOrJoinModal from './CreateOrJoinModal';

import Screen from 'ui/component/Screen';
import useViewModel from './useViewModel';
import useTopic from 'hook/useTopic';
import Chat from './Chat';

export const HomeScreen = () => {
  useViewModel();
  const { topic } = useTopic();

  return (
    <Screen>
      <KeyboardAvoidingView
        style={cls('flex_1', 'primary_bg_color')}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        {topic && <Chat />}
        <CreateOrJoinModal visible={!topic} />
      </KeyboardAvoidingView>
    </Screen>
  );
};

export default HomeScreen;
