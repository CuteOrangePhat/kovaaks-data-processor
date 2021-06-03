import './App.css';
import React from 'react';
import {HashRouter,Route,Switch} from "react-router-dom";
import Home from './views/Home/Home';
import Navigation from "./views/Navigation/Navigation";
import "../node_modules/material-design-icons/iconfont/material-icons.css";

const App = () => {
    return (
        <HashRouter>
            <div className="App">
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Home}/>
                </Switch>     
            </div>
        </HashRouter> 
    );
};

export default App;
