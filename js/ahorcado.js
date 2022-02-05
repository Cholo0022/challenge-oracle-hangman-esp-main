function palabraSecreta() {
  var listadoPalabras = ["ALURA", "ORACLE", "JAVASCRIPT", "HTML"];
  var indice = Math.round(Math.random() * (listadoPalabras.length - 1));
  var palabraAlAzar = listadoPalabras[indice];
  return palabraAlAzar;
}

function verificarTeclaPresionada() {
  var palabra = palabraSecreta();
  console.log(palabra)
  var patron = /^[A-ZÑ\s]+$/;
  window.addEventListener("keydown", function (event) {
    event.preventDefault();
    var letraValida = false;
    if (patron.test(event.key)) {
      for (var i = 0; i < palabra.length; i++) {
        if (palabra[i] === event.key) {
          letraValida = true;
          console.log("La letra " + event.key + " si está en la posición " + i);
          dibujarLetraCorrecta(event.key)
        }        
      }
    }
    if (!letraValida) {
      dibujarLetraIncorrecta(event.key)
      dibujarHorca()
    }
    return letraValida; 
  });
}


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
/*
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
      }
      dibujarLetraIncorrecta(letra);
    }
  });
  return letra;
}

inicioJuego();
*/
