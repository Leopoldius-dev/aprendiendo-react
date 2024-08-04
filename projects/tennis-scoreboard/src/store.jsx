import { configureStore } from '@reduxjs/toolkit';
import scoreboardReducer from './scoreboardSlice';

const store = configureStore({
  reducer: {
    scoreboard: scoreboardReducer,
  },
});

export default store;
