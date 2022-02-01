var listadoPalabras = ["ALURA", "ORACLE", "JAVASCRIPT", "HTML"];

var btnInicioJuego = document.querySelector("#iniciar-juego");

btnInicioJuego.addEventListener("click", function () {
  console.log("Iniciando juego");
  var indice = Math.round(Math.random() * (listadoPalabras.length - 1));
  var palabraAlAzar = listadoPalabras[indice];
  var letraValida = false;
  console.log(palabraAlAzar);
  var patron = /^[A-ZÑ\s\!\¡\?\¿]+$/;
  var oportunidades = 0;
  window.addEventListener("keydown", function (event) {
    if (patron.test(event.key)) {
      console.log(event.key);
      for (var i = 0; i < palabraAlAzar.length; i++) {
        if (event.key == palabraAlAzar[i]) {
          console.log(palabraAlAzar[i]);
          letraValida = true;
        }
      }
      if (letraValida) {
        console.log("La letra " + event.key + " si está");
      } else {
        console.log("La letra " + event.key + " no está");
        oportunidades += 1;
      }
      letraValida = false;
      console.log("INTENTOS" + oportunidades);
    }
  });
});
