const {app, BrowserWindow, screen} = require('electron');
const path = require('path');
const { electron } = require('process');

const createWindow = () => {
    const controlWindow = new BrowserWindow({
      useContentSize: true, 
      webPreferences: {
        preload: path.join(__dirname, 'preload.js')
      }
    });

    let displays = screen.getAllDisplays();
    let externalDisplay = displays[1];

    // if (externalDisplay) {
    //     const presentWindow = new BrowserWindow({
    //         x: externalDisplay.bounds.x,
    //         y: externalDisplay.bounds.y,
    //         fullscreen: true,
    //         //width: externalDisplay.size.width,
    //         //height: externalDisplay.size.height
    //     });
    // };
    
    //open windows
    controlWindow.loadFile("./windows/control.html");
    //presentWindow.loadFile('./windows/present.html');
}

app.whenReady().then(() => {
    createWindow();
  
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
});