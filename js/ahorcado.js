function inicioJuego() {
  var btnInicioJuego = document.querySelector("#iniciar-juego");

  btnInicioJuego.addEventListener("click", function () {
    console.log("Iniciando juego");
    palabraSecreta();
    dibujarTablero();
    verificarTeclaPresionada();
  });
  return;
}
inicioJuego();
//agregarPalabra();

var listadoPalabras = ["ALURA", "ORACLE", "JAVASCRIPT", "HTML"];

function palabraSecreta() {
  var indice = Math.round(Math.random() * (listadoPalabras.length - 1));
  var palabraAlAzar = listadoPalabras[indice];
  dibujarLineas(palabraAlAzar.length);
  return palabraAlAzar;
}

function agregarPalabra() {
  var btnAgregarPalabra = document.querySelector("#nueva-palabra");
  var patron = /^[A-ZÑ\s]+$/;
  btnAgregarPalabra.addEventListener("click", function () {
    var inputNuevaPalabra = document.querySelector("#input-nueva-palabra");
    var palabraNueva = inputNuevaPalabra.value;

    if (patron.test(palabraNueva)) {
      listadoPalabras.push(palabraNueva);
      console.log(listadoPalabras);
    }
  });
  return;
}

function verificarTeclaPresionada() {
  var palabra = palabraSecreta();
  var intentos = 0;
  var largoPalabra = 0;
  console.log(palabra);
  //var patron = new RegExp("[A-Z]+");
  var patron = /^[A-ZÑ\s]+$/;
  var letraRepetida = [];

  window.addEventListener("keydown", function (event) {
    var repetida = false;
    var letraValida = false;
    for (var x = 0; x < letraRepetida.length; x++) {
      if (letraRepetida[x] === event.key) {
        console.log("Letra " + event.key + " repetida");
        repetida = true;
      }
    }
    if (patron.test(event.key) && !repetida) {
      //repetida = false;
      letraRepetida.push(event.key);
      for (var i = 0; i < palabra.length; i++) {
        if (palabra[i] === event.key) {
          largoPalabra += 1;
          letraValida = true;
          console.log("La letra " + event.key + " si está en la posición " + i);
          dibujarLetraCorrecta(event.key, i);
          if (largoPalabra == palabra.length) {
            dibujarGanaste();
          }
        }
      }
      if (!letraValida) {
        dibujarLetraIncorrecta(event.key, intentos);
        intentos += 1;
        dibujarHorca(intentos);
        finDelJuego(intentos);
      }
    }
    console.log(letraRepetida);
    return;
  });
}

function finDelJuego(intentos) {
  if (intentos == 9) {
    dibujarFinDelJuego();
  }
}
