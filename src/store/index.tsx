import { configureStore } from '@reduxjs/toolkit';
import stepsReducers from './stepsSlice';
import userReducers from './userSlice';

export const store = configureStore({
  reducer: {
    steps: stepsReducers,
    user: userReducers,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
