import { configureStore, Middleware } from '@reduxjs/toolkit';
import saga from 'redux-saga';
import stepsReducers from './stepsSlice';
import userReducers from './userSlice';
import sagas from './sagas';

const loggerMiddleware: Middleware = (store) => (next) => (action) => {
  console.log('Action:', action);
  const result = next(action);
  console.log('Next state:', store.getState());
  return result;
};

const sagaMiddleware = saga();

export const store = configureStore({
  reducer: {
    steps: stepsReducers,
    user: userReducers,
  },
  middleware: [loggerMiddleware, sagaMiddleware],
});

sagaMiddleware.run(sagas);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
