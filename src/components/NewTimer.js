import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import './NewTimer.css';

// Import our action to add a new timer
import { addTimer } from '../features/timers/timersSlice';

export default function NewTimer() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const createNewTimer = () => {
    dispatch(addTimer([name, description]));
    setName('');
    setDescription('');
  };

  return (
    <div className="NewTimer">
      <input
        className='name-input'
        type="text"
        placeholder="New Timer Name"
        name="name"
        value={name}
        onChange={((evt) => setName(evt.target.value))}
      />
      <input
        className='desc-input'
        type="text"
        placeholder="Description"
        name="description"
        value={description}
        onChange={((evt) => setDescription(evt.target.value))}
      />
      <button onClick={createNewTimer}>
        Save
      </button>
    </div>
  )
}
