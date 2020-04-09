import React from 'react';
import './App.css';
import TownList from './Components/TownsComponents/TownList';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  return (
    <div className="App">
      <TownList/>
    </div>
  );
}

export default App;
