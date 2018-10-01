const { app, BrowserWindow } = require('electron');

  app.on('ready', createWindow);

  function createWindow () {
    win = new BrowserWindow({ width: 400, height: 335 });
    win.setMenu(null);
    win.loadFile('index.html');
  }

  app.on('window-all-closed', function() {
    if (process.platform != 'darwin') {
      app.quit();
    }
 });
