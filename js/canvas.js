//Función que dibuja el tablero 
function dibujarTablero(x) {
  var pantalla = document.querySelector("#ahorcado");
  var pincel = pantalla.getContext("2d");
  pincel.fillStyle = "lightgrey";
  pincel.fillRect(0, 0, 1200, 800);
  for (var x = 50; x < 250; x++) {
    pincel.fillStyle = "black"; //
    pincel.beginPath();
    pincel.arc(x, 780, 5, 0, 2 * 3.14);
    pincel.fill();
  }
  return pincel;
}

//Función que va dibujando la horca a medida erran la letra a coincidir
function dibujarHorca(intentos) {
  var pantalla = document.querySelector("#ahorcado");
  var pincel = pantalla.getContext("2d");
  // Dibuja el primer error de la horca
  if (intentos == 1) {
    for (var y = 780; y > 200; y--) {
      pincel.fillStyle = "black";
      pincel.beginPath();
      pincel.arc(150, y, 5, 0, 2 * 3.14);
      pincel.fill();
    }
  }
  // Dibuja el segundo error de la horca
  if (intentos == 2) {
    for (var x = 150; x < 400; x++) {
      pincel.fillStyle = "black";
      pincel.beginPath();
      pincel.arc(x, 200, 5, 0, 2 * 3.14);
      pincel.fill();
    }
  }
  // Dibuja el tercer error de la horca
  if (intentos == 3) {
    for (var y = 200; y < 300; y++) {
      pincel.fillStyle = "black";
      pincel.beginPath();
      pincel.arc(400, y, 5, 0, 2 * 3.14);
      pincel.fill();
    }
  }
  // Dibuja el cuarto error de la horca
  if (intentos == 4) {
    pincel.fillStyle = "black";
    pincel.beginPath();
    pincel.arc(400, 300, 50, 0, 2 * 3.14);
    pincel.fill();
    pincel.fillStyle = "lightgrey";
    pincel.beginPath();
    pincel.arc(400, 300, 45, 0, 2 * 3.14);
    pincel.fill();
  }
  // Dibuja el quinto error de la horca
  if (intentos == 5) {
    for (var y = 350; y < 550; y++) {
      pincel.fillStyle = "black";
      pincel.beginPath();
      pincel.arc(400, y, 5, 0, 2 * 3.14);
      pincel.fill();
    }
  }
  // Dibuja el sexto error de la horca
  if (intentos == 6) {
    pincel.lineWidth = 10;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(250, 350);
    pincel.lineTo(400, 450);
    pincel.stroke();
  }
  // Dibuja el septimo error de la horca
  if (intentos == 7) {
    pincel.lineWidth = 10;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(400, 450);
    pincel.lineTo(550, 350);
    pincel.stroke();
  }
  // Dibuja el octavo error de la horca
  if (intentos == 8) {
    pincel.lineWidth = 10;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(400, 550);
    pincel.lineTo(300, 700);
    pincel.stroke();
  }
  // Dibuja el último error de la horca
  if (intentos == 9) {
    pincel.lineWidth = 10;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(400, 550);
    pincel.lineTo(500, 700);
    pincel.stroke();
  }
  //Al presionar una tecla recargo la pagina para terminar el juego.
  if (intentos >= 10) {
    location.reload();
  }
}

//Función que dibuja el mensaje cuando se pierde el juego
function dibujarFinDelJuego() {
  var pantalla = document.querySelector("#ahorcado");
  var pincel = pantalla.getContext("2d");

  pincel.fillStyle = "red";
  pincel.font = "bold 50px Arial";
  pincel.fillText("Fin del juego", 500, 500);
  pincel.fillStyle = "black";
  pincel.font = "bold 15px Arial";
  pincel.fillText("Precione cualquier tecla para terminar", 500, 550);
  pincel.textAlign = "left";
  return;
}

//Función que dibuja el mensaje de ganador
function dibujarGanaste() {
  var pantalla = document.querySelector("#ahorcado");
  var pincel = pantalla.getContext("2d");

  pincel.fillStyle = "blue";
  pincel.font = "bold 50px Arial";
  pincel.fillText("Ganaste, Felicidades!", 900, 500);
  pincel.textAlign = "left";
  pincel.fillStyle = "black";
  pincel.font = "bold 15px Arial";
  pincel.fillText("Precione cualquier tecla para terminar", 500, 550);
  //Al tocar cualquier tecla recarga la pagina para volver a empezar
  window.addEventListener("keydown", function (event) {
    event.preventDefault();
    location.reload();
  });
}

//Función que dibuja las lineas de la palabra elejida al azar
function dibujarLineas(cantidad) {
  var pantalla = document.querySelector("#ahorcado");
  var pincel = pantalla.getContext("2d");

  for (var x = 600; x < cantidad * 40 + 600; x = x + 40) {
    pincel.lineWidth = 5;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(x, 780);
    pincel.lineTo(x + 30, 780);
    pincel.stroke();
  }
}

//Función que va dibujando las letras acertadas en la posición correspondiente.
function dibujarLetraCorrecta(letraCorrecta, posicion) {
  var pantalla = document.querySelector("#ahorcado");
  var pincel = pantalla.getContext("2d");
  console.log(letraCorrecta);
  console.log(posicion);
   if (posicion >= 1) {
    pincel.fillStyle = "blue";
    pincel.font = "bold 25px Arial";
    pincel.fillText(letraCorrecta, posicion * 40 + 625, 775);
    pincel.textAlign = "right";
  }
  if (posicion == 0) {
    pincel.fillStyle = "blue";
    pincel.font = "bold 25px Arial";
    pincel.fillText(letraCorrecta, posicion * 40 + 607, 775);
    pincel.textAlign = "right";
  }
}

//Función que va dibujando la letra incorrecta.
function dibujarLetraIncorrecta(letraIncorrecta, posicion) {
  var pantalla = document.querySelector("#ahorcado");
  var pincel = pantalla.getContext("2d");

  pincel.fillStyle = "red";
  pincel.font = "bold 25px Arial";
  pincel.fillText(letraIncorrecta, posicion * 40 + 625, 300);
  pincel.textAlign = "left";
}
