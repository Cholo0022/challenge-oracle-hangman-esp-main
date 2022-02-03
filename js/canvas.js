function dibujarTablero() {
  var pantalla = document.querySelector("#ahorcado");
  var pincel = pantalla.getContext("2d");
  pincel.fillStyle = "lightgrey";
  pincel.fillRect(0, 0, 1200, 800);
  return pincel;
}

function dibujarLetraCorrecta(letra) {
  var pantalla = document.querySelector("#ahorcado");
  var pincel = pantalla.getContext("2d");

  pincel.fillStyle = "rgb(255,0,0)";
  pincel.font = "bold 25px Arial";
  pincel.fillText(letra, 150, 50);
  pincel.textAlign = "right";
}

function dibujarLetraIncorrecta(letra) {
  var pantalla = document.querySelector("#ahorcado");
  var pincel = pantalla.getContext("2d");

  pincel.fillStyle = "rgb(255,0,0)";
  pincel.font = "bold 25px Arial";
  pincel.fillText(letra, 150, 50);
  pincel.textAlign = "left";
}

/*function dibujarBaseAhorcado(x) {
  pincel.fillStyle = "black";
  pincel.beginPath();
  pincel.arc(x, 790, 5, 0, 2 * Math.PI);
  pincel.fill();
}

dibujarBaseAhorcado(20);
dibujarBaseAhorcado(30);*/
