const { app, BrowserWindow } = require('electron')
const chokidar = require('chokidar');
const path = require('path')

const isDev = true;

const statsPath = isDev ?
    './src/mockData/*.csv'
    :'C:/Program Files (x86)/Steam/steamapps/common/FPSAimTrainer/FPSAimTrainer/stats/*.csv';

const chokidarOptions = {
    depth: 1
}

function createWindow () {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nativeWindowOpen: true,
            contextIsolation: true,
            enableRemoteModule: false,
        }
    })

    win.loadURL(
        isDev
            ? "http://localhost:3000"
            : `file://${path.join(__dirname, "/build/index.html")}`
    );

    win.webContents.on('did-finish-load', () => {
        chokidar.watch(statsPath, chokidarOptions).on('all', (event, path) => {
            win.webContents.send('toFileService', path)
        });
    })
}

app.whenReady().then(() => {
    createWindow()

    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})
