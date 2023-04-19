const path = require("path");

const { app, BrowserWindow, Menu, ipcMain } = require("electron");
const isDev = require("electron-is-dev");

// Conditionally include the dev tools installer to load React Dev Tools
let installExtension, REACT_DEVELOPER_TOOLS; // NEW!

// initialize the mainWindow variable globally
// Place holders for mainWindow so it doesn't get garbage collected
let mainWindow = null;

// set Icon path, if any
const iconPath = path.join(__dirname, 'images', process.platform === 'win32' ? 'icon.ico' : 'icon.png');

if (isDev) {
  const devTools = require("electron-devtools-installer");
  installExtension = devTools.default;
  REACT_DEVELOPER_TOOLS = devTools.REACT_DEVELOPER_TOOLS;
} // NEW!

// Handle creating/removing shortcuts on Windows when installing/uninstalling
if (require("electron-squirrel-startup")) {
  app.quit();
} // NEW!

// Create an application menu
const menuTemplate = [];
// We can ask the OS for default menus by role(Electron has in built roles), and they will be built for us
const appMenu = { role: 'appMenu' };
const fileMenu = { role: 'fileMenu' }
const editMenu = { role: 'editMenu' };
const windowMenu = { role: 'windowMenu' };

const devMenu = {
  label: 'Options',
  submenu: [
    { role: 'toggleDevTools', label: 'Dev Tools', accelerator: 'F12' },
    { role: 'reload' },
    { role: 'forceReload' },
  ],
}

// Build menu template
if (process.platform === 'darwin') {
  menuTemplate.push(appMenu);
} else {
  menuTemplate.push(fileMenu);
}
menuTemplate.push(editMenu, windowMenu);

// the dev menu only shows when app is not in production
if (process.env.NODE_ENV !== 'production') {
  menuTemplate.push(devMenu);
}

// Build the menu from the template
const menu = Menu.buildFromTemplate(menuTemplate);

// And set it for the application
Menu.setApplicationMenu(menu);

async function createWindow() {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      enableRemoteModule: true,
      contextIsolation: false,
      // disable background throttling when the window is not focused
      backgroundThrottling: false,
    },
    icon: iconPath,

    // set the default window title. Remember that if the <title> tag
    // in the html document that is loaded by loadUrl is set, this
    //property will be ignored
    title: 'React TIMERZ App',
  });

  // and load the index.html of the app.
  // win.loadFile("index.html");
  mainWindow.loadURL(
    !isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  // Open the DevTools.
  // if (isDev) {
  //   mainWindow.webContents.openDevTools({ mode: "detach" });
  // }
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow();

  if (isDev) {
    installExtension(REACT_DEVELOPER_TOOLS)
      .then(name => console.log(`Added Extension:  ${name}`))
      .catch(error => console.log(`An error occurred: , ${error}`));
  }
}); // UPDATED!

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

// Define any IPC or other custom functionality below here
// Remember the four objects to use when
//communicating between processes(in this case, your react -renderer process- and electron process - main process)
/*
  - ipcRenderer.send(send messages/data from react process to electron app process)
  - ipcMain.on(receive messages/data from react process)
  - mainWindowwebContents.send(send messages/data from elecrton app process to react process)
  - ipcRenderer.on(receive messages/data from electron app)
  */

// Sample: To receive message from react side:

ipcMain.on('eventToListenTo', (event, messageReceived) => {
  // do stuff here
})


// Sample: To send message to react side

// let messageToSend = 'I am sending Message'
// mainWindow.webContents.send('eventToListen', messageToSend)
