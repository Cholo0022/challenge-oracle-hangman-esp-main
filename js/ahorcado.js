function inicioJuego() {
  var btnInicioJuego = document.querySelector("#iniciar-juego");

  btnInicioJuego.addEventListener("click", function () {
    console.log("Iniciando juego");
    palabraSecreta();
    validarLetra();
    dibujarTablero();
  });
}

function palabraSecreta() {
  var listadoPalabras = ["ALURA", "ORACLE", "JAVASCRIPT", "HTML"];
  var indice = Math.round(Math.random() * (listadoPalabras.length - 1));
  var palabraAlAzar = listadoPalabras[indice];
  console.log(palabraAlAzar);
  return palabraAlAzar;
}

function validarLetra(event) {
  var letraValida;
  var patron = /^[A-ZÑ\s]+$/;

  window.addEventListener("keydown", function (event) {
    event.preventDefault();
    if (patron.test(event.key)) {
      letraValida = event.key;
    }
  });
  return letraValida;
}

function encontrarLetra(letra) {}

inicioJuego();
