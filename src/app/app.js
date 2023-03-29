import { configureStore } from "@reduxjs/toolkit";
import timersReducer from '../features/timers/timersSlice.js';

export const store = configureStore({
  reducer: {
    timers: timersReducer
  }
})


