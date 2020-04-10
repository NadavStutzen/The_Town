import React from 'react';
import './App.css';
import TownList from './Components/TownsComponents/TownList';
import ContactList from './Components/TownsComponents/ContactList';
import CreateTown from './Components/TownsComponents/CreateTown';

function App() {
    return (
        <div className="App">
            <CreateTown />
        </div>
    );
}

export default App;
