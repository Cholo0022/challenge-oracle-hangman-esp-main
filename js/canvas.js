function dibujarTablero() {
  var pantalla = document.querySelector("#ahorcado");
  var pincel = pantalla.getContext("2d");
  pincel.fillStyle = "lightgrey";
  pincel.fillRect(0, 0, 1200, 800);
  return pincel;
}

/*
function dibujarLetraCorrecta(letra) {
  lienzo.fillStyle = "rgb(255,0,0)";
  lienzo.font = "bold 25px Arial";
  lienzo.fillText(letra, 150, 50);
  lienzo.textAlign = "center";
}
*/
/*function dibujarBaseAhorcado(x) {
  pincel.fillStyle = "black";
  pincel.beginPath();
  pincel.arc(x, 790, 5, 0, 2 * Math.PI);
  pincel.fill();
}

dibujarBaseAhorcado(20);
dibujarBaseAhorcado(30);*/
