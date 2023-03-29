import { configureStore } from "@reduxjs/toolkit";
import timersReducer from '../features/timers/timersSlice.js';
import { update } from "../features/timers/timersSlice.js";

export const store = configureStore({
  reducer: {
    timers: timersReducer
  }
})

// TIMER LOGIC
let lastUpdateTime = Date.now();

setInterval(() => {
  const now = Date.now();
  const deltaTime = now - lastUpdateTime;
  lastUpdateTime = now;
  store.dispatch(update(deltaTime));
}, 0)


