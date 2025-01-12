import React, { useRef } from 'react';
import Header from './Header';
import MessageContent from './MessageContent';
import MessageBox from './MessageBox';

const Chat = () => {
  const messageContentRef = useRef(null);

  const appendMessage = (msg, local) => messageContentRef.current.appendMessage(msg, local);

  return (
    <>
      <Header />
      <MessageContent ref={messageContentRef} />
      <MessageBox onMessageSent={appendMessage} />
    </>
  );
};

export default React.memo(Chat);
