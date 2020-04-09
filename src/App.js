import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.Counter.count);
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>{`the count is ${counter}`}</p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <button onClick={() => dispatch({ type: 'INCREASE' })}>
                    inc
                </button>
            </header>
        </div>
    );
}

export default App;
