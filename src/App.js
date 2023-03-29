import React from 'react';
import './App.css';
import logo from './logo.svg';
import NewTimer from './components/NewTimer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NewTimer />
      </header>
    </div>
  );
}

export default App;
