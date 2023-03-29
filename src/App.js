import React from 'react';
import './App.css';
import NewTimer from './components/NewTimer';
import ListTimers from './components/ListTimers';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewTimer />
        <ListTimers />
      </header>
    </div>
  );
}

export default App;
