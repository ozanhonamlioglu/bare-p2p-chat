import { createSlice } from '@reduxjs/toolkit';

const topicSlice = createSlice({
  name: 'topic',
  initialState: {
    topic: '',
    peerCount: 0,
  },
  reducers: {
    setTopic: (state, action) => {
      state.topic = action.payload;
    },
    setPeerCount: (state, action) => {
      state.peerCount = action.payload;
    },
  },
});

export const { setTopic, setPeerCount } = topicSlice.actions;
export default topicSlice.reducer;
