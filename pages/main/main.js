const {ipcRenderer} = require("electron");

submit.addEventListener("click", function() {
    let altura = document.querySelector("#altura").value;
    let peso = document.querySelector("#peso").value;
    let submit = document.querySelector("#submit");

    ipcRenderer.send("imc-request", [altura, peso]);
});