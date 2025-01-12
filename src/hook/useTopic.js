import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTopic, setPeerCount } from 'store/topic/topicSlice';

const useTopic = () => {
  const topic = useSelector((state) => state.topic.topic);
  const peerCount = useSelector((state) => state.topic.peerCount);
  const dispatch = useDispatch();

  const updateTopic = useCallback((newTopic) => {
    dispatch(setTopic(newTopic));
  }, []);

  const updatePeerCount = useCallback((newPeerCount) => {
    dispatch(setPeerCount(newPeerCount));
  }, []);

  return {
    topic,
    peerCount,
    updateTopic,
    updatePeerCount,
  };
};

export default useTopic;
