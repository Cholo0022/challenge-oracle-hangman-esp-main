
function dibujarTablero(x) {
  var pantalla = document.querySelector("#ahorcado");
  var pincel = pantalla.getContext("2d");
  pincel.fillStyle = "lightgrey";
  pincel.fillRect(0, 0, 1200, 800);
  for (var x = 50; x < 250; x++){
    pincel.fillStyle = "black";   //
    pincel.beginPath();
    pincel.arc(x, 780, 5 ,0 , 2*3.14);
    pincel.fill();
  }
  return pincel;
}

function dibujarLetraCorrecta(letraCorrecta) {
  var pantalla = document.querySelector("#ahorcado");
  var pincel = pantalla.getContext("2d");

  pincel.fillStyle = "blue";
  pincel.font = "bold 25px Arial";
  pincel.fillText(letraCorrecta, 1000, 50);
  pincel.textAlign = "right";
}

function dibujarLetraIncorrecta(letraIncorrecta) {
  var pantalla = document.querySelector("#ahorcado");
  var pincel = pantalla.getContext("2d");

  pincel.fillStyle = "red";
  pincel.font = "bold 25px Arial";
  pincel.fillText(letraIncorrecta, 1000, 300);
  pincel.textAlign = "left";

  dibujarHorca()
}

function dibujarHorca(intentos) {
  var pantalla = document.querySelector("#ahorcado");
  var pincel = pantalla.getContext("2d");
  //error 1
  if (intentos == 1){
      for (var y = 780; y > 200; y--){
        pincel.fillStyle = "black"; 
        pincel.beginPath();
        pincel.arc(150, y, 5 ,0 , 2*3.14);
        pincel.fill();
    }
  }
    //error 2
    if (intentos == 2){
    for (var x = 150; x < 400; x++){
      pincel.fillStyle = "black"; 
      pincel.beginPath();
      pincel.arc(x, 200, 5 ,0 , 2*3.14);
      pincel.fill();
    }
  }
  //error 3
  if (intentos == 3){
    for (var y = 200; y < 300; y++){
      pincel.fillStyle = "black"; 
      pincel.beginPath();
      pincel.arc(400, y, 5 ,0 , 2*3.14);
      pincel.fill();
    }
  }
    //error4
    if (intentos == 4){
    pincel.fillStyle = "black";   
      pincel.beginPath();
      pincel.arc(400, 300, 50 ,0 , 2*3.14);
    pincel.fill();
    pincel.fillStyle = "lightgrey";   
      pincel.beginPath();
      pincel.arc(400, 300, 45 ,0 , 2*3.14);
      pincel.fill();
    }
  //error 5
  if (intentos == 5){
    for (var y = 350; y < 550; y++) {
      pincel.fillStyle = "black";
      pincel.beginPath();
      pincel.arc(400, y, 5, 0, 2 * 3.14);
      pincel.fill();  
    }
  }
    //error 6 brazo izq
    if (intentos == 6){
    pincel.lineWidth = 10;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(250, 350);
    pincel.lineTo(400, 450);
    pincel.stroke();
    }
    //error 7 brazo der
    if (intentos == 7){
    pincel.lineWidth = 10;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(400, 450);
    pincel.lineTo(550, 350);
    pincel.stroke();
    }
    //error 8 pierna izq
    if (intentos == 8){
    pincel.lineWidth = 10;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(400, 550);
    pincel.lineTo(300, 700);
    pincel.stroke();
    }
    //error 8 pierna der
    if (intentos == 9){
    pincel.lineWidth = 10;
    pincel.strokeStyle = "black";
    pincel.beginPath();
    pincel.moveTo(400, 550);
    pincel.lineTo(500, 700);
    pincel.stroke();
    }
  }
