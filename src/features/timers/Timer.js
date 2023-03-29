import React from 'react';

export default function createTimer(name) {
  return {
    name,
    time: 0,
    isRunning: false
  }
}

const myTimer = createTimer('Workout');


