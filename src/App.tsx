import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {stores, StoresProvider} from "./store/RootStore";
import Navigation from "./components/Navigation/Navigation";
import {MemoryRouter, Route, Switch} from "react-router-dom";
import Voltaic from "./views/Voltaic/Voltaic";
import Settings from "./views/Settings/Settings";
import TitleBar from "./components/TitleBar/TitleBar";

ReactDOM.render(
    <React.StrictMode>
        <StoresProvider value={stores}>
            <TitleBar/>
            <div className="flex content">
                <MemoryRouter>
                    <Navigation/>
                    <div className="overflow-y-auto bg-purple-500 flex-auto">
                        <Switch>
                            <Route exact path="/" component={Voltaic}/>
                            <Route exact path="/settings" component={Settings}/>
                        </Switch>
                    </div>
                </MemoryRouter>
            </div>

        </StoresProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
