import { configureStore } from '@reduxjs/toolkit';
import topicReducer from './topic/topicSlice';

const store = configureStore({
  reducer: {
    topic: topicReducer,
  },
});

export default store;
