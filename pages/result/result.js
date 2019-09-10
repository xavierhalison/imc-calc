const {ipcRenderer} = require("electron");

ipcRenderer.on("imc-response", function(event, args) {
    document.querySelector("#imc").innerHTML = args;
})