import React from "react";
import { FileStore } from "./fileStore";

export const stores = Object.freeze({
    fileStore: new FileStore()
});

export const storesContext = React.createContext(stores);
export const StoresProvider = storesContext.Provider;
