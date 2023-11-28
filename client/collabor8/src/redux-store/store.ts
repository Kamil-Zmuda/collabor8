import { configureStore } from '@reduxjs/toolkit';
import userDetailsReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    userDetails: userDetailsReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export default store;