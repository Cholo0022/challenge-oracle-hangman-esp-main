var pantalla = document.querySelector("#ahorcado");
var pincel = pantalla.getContext("2d");
pincel.fillStyle = "lightgrey";
pincel.fillRect(0, 0, 800, 1200);

function dibujarBaseAhorcado(x) {
  pincel.fillStyle = "black";
  pincel.beginPath();
  pincel.arc(x, 790, 5, 0, 2 * Math.PI);
  pincel.fill();
}

dibujarBaseAhorcado(20);
dibujarBaseAhorcado(30);
