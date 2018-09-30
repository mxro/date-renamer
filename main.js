const { app, BrowserWindow } = require('electron');

  function createWindow () {
    win = new BrowserWindow({ width: 400, height: 335 });
    win.setMenu(null);
    win.loadFile('index.html');
  }

  app.on('ready', createWindow);
