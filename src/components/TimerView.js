import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTimer, resetTimer, deleteTimer } from '../features/timers/timersSlice';
import { formatTime } from '../utils/index';
import './TimerView.css';

export default function TimerView({index, name, description, time, isRunning}) {
  const dispatch = useDispatch();

  return (
    <div className="TimerView">
      <div>
        <h2>{name}</h2>
        <small>{description}</small>
      </div>
      <h1>{formatTime(time)}</h1>
      <button style={{backgroundColor: isRunning ? "red" : "green"}} onClick={() => dispatch(toggleTimer(index))}>
        {isRunning ? "Stop" : "Start"}
      </button>
      <button className='resetButton' onClick={() => dispatch(resetTimer(index))}>
        Reset
      </button>
      <button className='deleteButton' onClick={() => dispatch(deleteTimer(index))}>
        Delete
      </button>
    </div>
  )
}
