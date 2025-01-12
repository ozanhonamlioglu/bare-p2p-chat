import uiEvent, { RECEIVE_MESSAGE_UI } from 'lib/uiEvent';
import { useCallback, useEffect, useRef, useState } from 'react';
import { createMessage } from '../../../../../../worklet/api.mjs';

const STATIC_MEMBER_ID = 'abc';
const useViewModel = () => {
  const [messages, setMessages] = useState([]);
  const recyclerRef = useRef(null);
  const scrollControllerRef = useRef(null);

  const setControllerVisibility = useCallback(
    (status) => scrollControllerRef.current.controlVisibility(status),
    []
  );

  const visibilityShouldChange = useRef(false);
  const handleScroll = useCallback((event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const threshold = 100;

    if (offsetY > threshold) {
      if (visibilityShouldChange.current) return;
      setControllerVisibility(true);
      visibilityShouldChange.current = true;
    } else {
      if (!visibilityShouldChange.current) return;
      setControllerVisibility(false);
      visibilityShouldChange.current = false;
    }
  }, []);

  const onScrollToBottom = useCallback(() => {
    recyclerRef.current.scrollToIndex(0, true);
  }, []);

  useEffect(() => {
    const messageListener = uiEvent.on(RECEIVE_MESSAGE_UI, ({ memberId, message }) => {
      setMessages((messages) => [
        {
          ...message,
          local: false,
          memberId,
          showIndicator: messages[0]?.memberId === memberId ? false : true,
        },
        ...messages,
      ]);
    });

    return () => {
      messageListener.off();
    };
  }, []);

  const addNewMessage = useCallback((msg, local) => {
    setMessages((messages) => [
      {
        ...createMessage(msg, local),
        memberId: STATIC_MEMBER_ID,
        showIndicator: messages[0]?.memberId === STATIC_MEMBER_ID ? false : true,
      },
      ...messages,
    ]);
  }, []);

  return {
    recyclerRef,
    scrollControllerRef,
    handleScroll,
    onScrollToBottom,
    messages,
    addNewMessage,
  };
};

export default useViewModel;
