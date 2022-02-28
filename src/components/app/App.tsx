import React from 'react';
import './App.css';
import { Rockets } from '../rockets/Rockets';

function App() {
  return (
    <div data-testid="app" className="App">
      <header className="App-header">
        <Rockets />
      </header>
    </div>
  );
}

export default App;
