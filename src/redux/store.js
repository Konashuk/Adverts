import { configureStore } from '@reduxjs/toolkit';
import { exercisesReducer } from './slice';

export const store = configureStore({
  reducer: {
    advert: exercisesReducer,
  },

  // devTools: process.env.NODE_ENV === 'development',
});
