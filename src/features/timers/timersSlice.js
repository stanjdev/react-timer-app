import { createSlice } from '@reduxjs/toolkit';
import Timer from './Timer.js';

const initialState = {
  value: []
}

export const timersSlice = createSlice({
  name: 'timers',
  initialState,
  reducers: {
    addTimer: (state, action) => {
      state.value.push(new Timer(...action.payload))
    },
    toggleTimer: (state, action) => {
      state.value[action.payload].isRunning = !state.value[action.payload].isRunning
    },
    update: (state, action) => {
      state.value.forEach((timer) => {
        if (timer.isRunning) {
          timer.time += action.payload
        }
      })
    },
    resetTimer: (state, action) => {
      state.value[action.payload].time = 0;
      // state.value[action.payload].isRunning = false;
    },
    deleteTimer: (state, action) => {
      state.value.splice(action.payload, 1);
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTimer, toggleTimer, update, resetTimer, deleteTimer } = timersSlice.actions;

export default timersSlice.reducer;
