import './App.css';
import React from 'react';
import {HashRouter,Route,Switch} from "react-router-dom";
import Voltaic from './views/Voltaic/Voltaic';
import Navigation from "./components/Navigation/Navigation";
import "../node_modules/material-design-icons/iconfont/material-icons.css";

const App = () => {
    return (
        <HashRouter>
            <div className="App">
                <Navigation />
                <Switch>
                    <Route exact path="/" component={Voltaic}/>
                </Switch>     
            </div>
        </HashRouter> 
    );
};

export default App;
