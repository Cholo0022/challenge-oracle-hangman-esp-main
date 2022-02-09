//lISTADO DE PALABRA PARA ELEJIR AL AZAR
var listadoPalabras = ["ALURA", "ORACLE", "JAVASCRIPT", "HTML"];
console.log(listadoPalabras)

//Iniciando el juego
function inicioJuego() {
  var btnInicioJuego = document.querySelector("#iniciar-juego");

  btnInicioJuego.addEventListener("click", function () {
    console.log("Iniciando juego");
    //Cuando comienza nos posicionamos en el tablero
    nivel.scrollIntoView();
    palabraSecreta();
    dibujarTablero();
    verificarTeclaPresionada();
    
  });
  return;
}
//llamando a la función para comenzar el juego
inicioJuego();
agregarPalabra();

//Función que elije al azar palabras de un array
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
    palabraNueva = "";
  });
  return;
}

//Función que verifica si la tecla presionada.
function verificarTeclaPresionada() {
  var palabra = palabraSecreta();
  var intentos = 0;
  var largoPalabra = 0;
  console.log(palabra);
  var patron = /^[A-ZÑ\s]+$/;
  var letraRepetida = [];
  //Escuchamos el teclado
  window.addEventListener("keydown", function (event) {
    var repetida = false;
    var letraValida = false;
    //verificamos si la tecla ya ha sido presionada y la marcamos como verdadera si así fue.
    for (var x = 0; x < letraRepetida.length; x++) {
      if (letraRepetida[x] === event.key) {
        //console.log("Letra " + event.key + " repetida");
        repetida = true;
      }
    }
    //Si la tecla presionada es mayuscula y no está marcada como true no se repitió e ingresa.
    if (patron.test(event.key) && !repetida) {
      letraRepetida.push(event.key);
      //Recorremos la palabra elejida al azar y comparamos con la letra tecleada, si coincide se dibuja la letra correcta.
      for (var i = 0; i < palabra.length; i++) {
        if (palabra[i] === event.key) {
          largoPalabra += 1;
          letraValida = true;
          //console.log("La letra " + event.key + " si está en la posición " + i);
          dibujarLetraCorrecta(event.key, i);
          //Si el largo de la palabra coincide con el contador largoPalabra quiere decir que ganamos y llamamos a dicha función.
          if (largoPalabra == palabra.length) {
            dibujarGanaste();
          }
        }
      }
      //Si no hay coincidencias entre la palabra elejida al azar y la tecleada, entonces llamamos a la función que dibuje letra incorrecta,
      //dibujar horca y fin del juego
      if (!letraValida) {
        dibujarLetraIncorrecta(event.key, intentos);
        intentos += 1;
        dibujarHorca(intentos);
        finDelJuego(intentos);
      }
    }
    //console.log(letraRepetida);
    return;
  });
}

//Función que recibe la cantidad de intentos y en caso de llegar al último intento llama a dibujar el mensaje final.
function finDelJuego(intentos) {
  if (intentos == 9) {
    dibujarFinDelJuego();
  }
}
