const { app, BrowserWindow } = require('electron')
const path = require('path')

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1280,
    height: 768,
    fullscreen: true,
    webPreferences: {
      webviewTag:true,
      preload: path.join(__dirname, 'preload.js'),
      // allowRunningInsecureContent: true
    }
  })

  // win.webContents.openDevTools()

  win.loadFile('dist/index.html')
  // win.loadURL('http://localhost:1234/');
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})