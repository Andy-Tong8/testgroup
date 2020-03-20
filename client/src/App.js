import React from 'react';
import './App.css';
import { Router, Link } from '@reach/router';
import New from './components/New';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Show from './components/Show'
import Edit from './components/Edit';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Dashboard path="/dashboard" />
        <New path="/add" />
        <Show path="/show/:id" />
        <Edit path="/edit/:id" />
      </Router>
      <div className="router">
        <h1> <Link to="/add"> Add Player </Link></h1>
        <h4><Link to="/show/1"> Show Player (should be linked from dashboard) </Link></h4>
      </div>

    </div>
  );
}

export default App;
