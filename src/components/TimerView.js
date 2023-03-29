import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTimer } from '../features/timers/timersSlice';

export default function TimerView({index, name, time, isRunning}) {
  const dispatch = useDispatch();

  return (
    <div>
        <h2>{name}</h2>
        <h1>{time}</h1>
        <button onClick={() => dispatch(toggleTimer(index))}>
          {isRunning ? "Stop" : "Start"}
        </button>
    </div>
  )
}
