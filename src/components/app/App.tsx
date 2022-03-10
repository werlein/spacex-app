import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import { Home } from '../home/Home';
import { Rocket } from '../rocket/Rocket';

function App() {
  return (
    <div data-testid="app" className="App">
      <header className="App-header">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rockets/:id" element={<Rocket />} />
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
