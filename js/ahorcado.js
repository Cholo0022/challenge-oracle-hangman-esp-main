function inicioJuego() {
  var btnInicioJuego = document.querySelector("#iniciar-juego");

  btnInicioJuego.addEventListener("click", function () {
    console.log("Iniciando juego");
    palabraSecreta();
    dibujarTablero();
    verificarTeclaPresionada();
  });
}
inicioJuego();

function palabraSecreta() {
  var listadoPalabras = ["ALURA", "ORACLE", "JAVASCRIPT", "HTML"];
  var indice = Math.round(Math.random() * (listadoPalabras.length - 1));
  var palabraAlAzar = listadoPalabras[indice];
  dibujarLineas(palabraAlAzar.length);
  return palabraAlAzar;
}

function verificarTeclaPresionada() {
  var palabra = palabraSecreta();
  var intentos = 0;
  var largoPalabra = 0;
  console.log(palabra);
  var patron = /^[A-ZÑ]+$/;
  window.addEventListener("keydown", function (event) {
    event.preventDefault();
    var letraValida = false;
    if (patron.test(event.key)) {
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
    }
    if (!letraValida) {
      dibujarLetraIncorrecta(event.key, intentos);
      intentos += 1;
      dibujarHorca(intentos);
      finDelJuego(intentos);
    }
    return letraValida;
  });
}

function finDelJuego(intentos) {
  if (intentos == 9) {
    dibujarFinDelJuego();
  }
}
