import './App.css';
import React from 'react';
import {HashRouter,Link,Route,Switch} from "react-router-dom";
import Home from './views/index';

const App = () => {
    return (
        <HashRouter>
            <div className="App">
                <div className="menu">
                    <Link to="/"><h2>Home</h2></Link>
                </div>
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>     
            </div>
        </HashRouter> 
    );
};

export default App;
