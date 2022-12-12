import React, { Component } from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import backgroundImage from './pattern.jpg';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ background: `url(${backgroundImage})` }}>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Dashboard/>} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

