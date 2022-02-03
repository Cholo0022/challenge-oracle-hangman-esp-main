function inicioJuego() {
  var btnInicioJuego = document.querySelector("#iniciar-juego");

  btnInicioJuego.addEventListener("click", function () {
    console.log("Iniciando juego");
    palabraSecreta();
    dibujarTablero();
    verificarTecla();
  });
}

function palabraSecreta() {
  var listadoPalabras = ["ALURA", "ORACLE", "JAVASCRIPT", "HTML"];
  var indice = Math.round(Math.random() * (listadoPalabras.length - 1));
  var palabraAlAzar = listadoPalabras[indice];
  console.log(palabraAlAzar);
  return palabraAlAzar;
}

function verificarTecla() {
  var letraValida = false;
  var letra;
  var patron = /^[a-zñ\s]+$/;
  window.addEventListener("keydown", function (event) {
    event.preventDefault();
    if (patron.test(event.key)) {
      letra = event.key;
      console.log("Letra valida " + letraValida);
    }
    var palabra = palabraSecreta();
    for (var i = 0; i < palabra.length; i++) {
      if (letra == palabra[i]) {
        dibujarLetraCorrecta(letra);
      } else {
        dibujarLetraIncorrecta(letra);
      }
    }
  });
  return letra;
}

inicioJuego();
