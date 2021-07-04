import React from "react";
import { ScenarioStore } from "./ScenarioStore";
import SettingsStore from "./SettingsStore";

export const stores = Object.freeze({
    scenarioStore: new ScenarioStore(),
    settingsStore: new SettingsStore(),

});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;
