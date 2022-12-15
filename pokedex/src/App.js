import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import backgroundImage from './pattern.jpg';
import NavBar from './components/layout/NavBar';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App" style={{ background: `url(${backgroundImage})` }}>
          <NavBar />
          <div className="container">
            <Routes>
              <Route path="/" element={<Dashboard/>} />
              <Route path={"/pokemon/:pokemonIndex"} element={<Pokemon/>} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

