const { app, BrowserWindow, screen, ipcMain, Menu } = require('electron');

app.whenReady().then(() => {
  const { width, height } = screen.getPrimaryDisplay().workAreaSize;
  const win = new BrowserWindow({
    width: width,
    height: height,
    x: 0,
    y: 0,
    transparent: true,
    frame: false,
    alwaysOnTop: true,
    skipTaskbar: true,
    resizable: false,
    webPreferences: { nodeIntegration: true, contextIsolation: false }
  });
  win.setIgnoreMouseEvents(true, { forward: true });

  ipcMain.on('mouse', (e, ignore) => {
    win.setIgnoreMouseEvents(ignore, { forward: true });
  });

  ipcMain.on('menu', () => {
    const menu = Menu.buildFromTemplate([
      { label: 'Quit pet', click: () => app.quit() }
    ]);
    menu.popup({ window: win });
  });

  win.loadFile('index.html');
});