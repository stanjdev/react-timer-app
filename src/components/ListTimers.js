import React from 'react';
import { useSelector } from 'react-redux';
import TimerView from './TimerView';

export default function ListTimers() {
  const timers = useSelector((state) => state.timers.value)
  return (
    <div>
      {timers.map((timer, i) => <TimerView key={i} name={timer.name} time={timer.time} isRunning={timer.isRunning} />)}
    </div>
  )
}

