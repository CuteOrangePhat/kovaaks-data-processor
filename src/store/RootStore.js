import React from "react";
import { ScenarioStore } from "./ScenarioStore";

export const stores = Object.freeze({
    scenarioStore: new ScenarioStore()
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;
