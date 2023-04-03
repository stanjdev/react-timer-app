import { configureStore } from "@reduxjs/toolkit";
import timersReducer from '../features/timers/timersSlice.js';
import { update } from "../features/timers/timersSlice.js";
import { loadState, saveState } from "../utils/persistState.js";
import { throttle } from 'lodash';

export const store = configureStore({
  reducer: {
    timers: timersReducer
  },
  preloadedState: loadState()
})

// lo-dash. Now state is only being written to local storage every 1000ms
store.subscribe(throttle(() => {
  saveState(store.getState());
}, 1000));

// TIMER LOGIC
let lastUpdateTime = Date.now();

setInterval(() => {
  const now = Date.now();
  const deltaTime = now - lastUpdateTime;
  lastUpdateTime = now;
  store.dispatch(update(deltaTime));
}, 0)


