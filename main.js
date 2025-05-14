const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");
const menuTemplate = [
  {
    label: "File",
    submenu: [{ role: "quit" }],
  },
  {
    label: "Help",
    submenu: [
      {
        label: "Website",
        click: () => {
          require("electron").shell.openExternal("https://pixeld.vercel.app");
        },
      },
    ],
  },
];
const menu = Menu.buildFromTemplate(menuTemplate);
Menu.setApplicationMenu(menu);

function createWindow() {
  const win = new BrowserWindow({
    show: false,
    resizable: false,
    backgroundColor: "#222034",
    icon: path.join(__dirname, "build", "icon.ico"),
    webPreferences: {
      nodeIntegration: true,
      // preload: path.join(__dirname, "preload.js"), // optional
    },
  });
  if (app.isPackaged) {
    win.loadFile("dist/index.html");
  } else {
    win.loadURL("http://localhost:5173");
  }
  win.webContents.on("did-finish-load", () => {
    win.webContents.setZoomFactor(1);
    win.setSize(760, 970);
    win.setResizable(false);
    win.show();
  });
}

app.whenReady().then(createWindow);
