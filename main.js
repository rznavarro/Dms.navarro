const { app, BrowserWindow, shell } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 520,
    height: 900,
    minWidth: 480,
    minHeight: 800,
    title: 'DM Sequencer — Vortexia',
    backgroundColor: '#0a0a0a',
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true
    }
  })
  win.loadFile('index.html')
  win.setMenuBarVisibility(false)
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url)
    return { action: 'deny' }
  })
}

app.whenReady().then(createWindow)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})