import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react";

function App() {
    const [state, setState] = useState({});
    useEffect(() => {
        fetch("https://swapi.dev/api/people/1/")
            .then(response => response.json()) // Parsing
            .then(data => setState(data)); // collecting
    });


    return (
        <div className="App">
            {state.name}
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
