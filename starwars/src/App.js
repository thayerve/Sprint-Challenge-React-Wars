import React from 'react';
import './App.css';
import CardGrid from './components/CardGrid';
import 'semantic-ui-css/semantic.min.css'

const App = () => {

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <CardGrid />
    </div>
  );
}

export default App;
