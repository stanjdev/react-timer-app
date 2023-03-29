import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

// Import our action to add a new timer
import { addTimer } from '../features/timers/timersSlice';

export default function NewTimer() {
  const [name, setName] = useState('');
  const dispatch = useDispatch();

  return (
    <div>
      <input
        type='text'
        placeholder='New Timer Name'
        name="name"
        value={name}
        onChange={((evt) => setName(evt.target.value))}
      />
      <button
        onClick={(() =>dispatch(addTimer(name)))}
      >Save</button>
    </div>
  )
}
