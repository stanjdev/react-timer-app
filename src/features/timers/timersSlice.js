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
      state.value.push(new Timer(action.payload))
    },
    toggleTimer: (state, action) => {
      state.value[action.payload].isRunning = !state.value[action.payload].isRunning
    }
  },
})

// Action creators are generated for each case reducer function
export const { addTimer, toggleTimer } = timersSlice.actions;

export default timersSlice.reducer;
