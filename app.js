const inputAmigos = document.getElementById("amigo");
const MisAmigos = [];

let ulMisAmigos = document.getElementById("listaAmigos");
let random = 0;
let amigoSecreto = 0;
let ulResultado = document.getElementById("resultado");

function agregarAmigo() {
  MisAmigos.push(inputAmigos.value);
  ulMisAmigos.innerHTML += `<li>${inputAmigos.value}</li>`;
  limpiar();
}

function sortearAmigo() {
  random = Math.floor(Math.random() * MisAmigos.length);
  amigoSecreto = MisAmigos[random];
  ulResultado.innerHTML = `el amigo secreto es : <li>${amigoSecreto}</li>`;
  reboot();
}

function limpiar() {
  document.querySelector("#amigo").value = "";
}

function reboot() {
  agregarAmigo();
  limpiar();
  document.querySelector("#again").setAttribute("disabled", "false");
}
