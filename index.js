const { app, BrowserWindow, ipcMain } = require('electron')

let win, result;

function createWindow () {

  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('./pages/main/main.html')

  // win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

function createResult () {
  result = new BrowserWindow({
    width: 600,
    height: 300,
    webPreferences: {
      nodeIntegration: true
    }
  });

  result.loadFile("./pages/result/result.html");
  result.on("closed", () => {
    result = null;
  })
}

ipcMain.on("imc-request", function(event, args) {
    var altura = args[0] / 100;
    var peso = args[1];
    var imc = peso / (altura * altura);

    createResult();

    result.webContents.on("did-finish-load", ()=> {
      result.webContents.send("imc-response", imc);
    })
})

app.on('ready', createWindow)

