import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom";
import Voltaic from './views/Voltaic/Voltaic';
import Navigation from "./components/Navigation/Navigation";

const App = () => {
    return (
        <HashRouter>
            <div className="flex h-full bg-purple-100">
                <Navigation/>
                <Switch>
                    <Route exact path="/" component={Voltaic}/>
                </Switch>
            </div>
        </HashRouter>
    );
};

export default App;
