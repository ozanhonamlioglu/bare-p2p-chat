import { useEffect } from 'react';
import uiEvent, { CONNECTIONS_UI } from 'lib/uiEvent';
import useTopic from 'hook/useTopic';

const useViewModel = () => {
  const { updatePeerCount } = useTopic();

  useEffect(() => {
    const peerCountListener = uiEvent.on(CONNECTIONS_UI, (count) => {
      updatePeerCount(count);
    });
    return () => {
      peerCountListener.off();
    };
  }, []);

  return null;
};

export default useViewModel;
