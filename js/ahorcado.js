function palabraSecreta() {
  var listadoPalabras = ["ALURA", "ORACLE", "JAVASCRIPT", "HTML"];
  var indice = Math.round(Math.random() * (listadoPalabras.length - 1));
  var palabraAlAzar = listadoPalabras[indice];
  return palabraAlAzar;
}

function verificarTeclaPresionada() {
  var palabra = palabraSecreta();
  var intentos = 0;
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
      intentos += 1;
      console.log(intentos)
      dibujarHorca(intentos)
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


