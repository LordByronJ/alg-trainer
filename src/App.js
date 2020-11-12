import React from 'react';
import Routes from './Routes';
import Navigation from './NavBar';
import './App.css';

let config = {
  algset: 'ollcp',
  algs: [],
}

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes config={config}/>
    </div>
  );
}

export default App;
