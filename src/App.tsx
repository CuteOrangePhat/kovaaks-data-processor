import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {stores, StoresProvider} from "./store/RootStore";
import Navigation from "./components/Navigation/Navigation";
import { MemoryRouter, Route, Switch} from "react-router-dom";
import Voltaic from "./views/Voltaic/Voltaic";

ReactDOM.render(
    <React.StrictMode>
        <StoresProvider value={stores}>
            <MemoryRouter>
                <div className="flex bg-purple-500 overflow-y-auto h-full">
                    <Navigation/>
                    <Switch>
                        <Route exact path="/" component={Voltaic}/>
                    </Switch>
                </div>
            </MemoryRouter>
        </StoresProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
