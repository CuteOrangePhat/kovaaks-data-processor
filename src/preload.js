import {contextBridge, ipcRenderer} from "electron";

contextBridge.exposeInMainWorld(
    "api", {
        request: (channel, data) => ipcRenderer.send(channel, data),
        response: (channel, func) => ipcRenderer.on(channel, (event, ...args) => func(...args))
    }
);
