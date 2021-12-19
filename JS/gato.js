var con=1;

var contador = 1;

var boton1 = "b1", boton2 = "b2", boton3 = "b3";
var boton4 = "b4", boton5 = "b5", boton6 = "b6";
var boton7 = "b7", boton8 = "b8", boton9 = "b9";

var texto;
let prompt = document.getElementById("win_text");
console.log(prompt);

function actions(boton){

  boton.className = "clicked";
  
  if(contador %2 == 0){

    boton.style.color="red";
    texto = "O";
  }
  else{
    
    boton.style.color="blue";
    texto = "X";
  }

  boton.value = texto;

  boton.innerHTML = texto;
  boton.disabled = true;

  contador++;

  asignarValorXO(boton);
}

function asignarValorXO(boton){

  if(boton1 == boton.name) boton1 = texto;
  else if(boton2 == boton.name) boton2 = texto;
  else if(boton3 == boton.name) boton3 = texto;
  else if(boton4 == boton.name) boton4 = texto;
  else if(boton5 == boton.name) boton5 = texto;
  else if(boton6 == boton.name) boton6 = texto;
  else if(boton7 == boton.name) boton7 = texto;
  else if(boton8 == boton.name) boton8 = texto;
  else if(boton9 == boton.name) boton9 = texto;

  setTimeout(validacion,100);
}

function validacion(){

  var comprobacion = false;

  if ((boton1 == boton2 && boton2 == boton3) || (boton1 == boton5 && boton5 == boton9) || (boton3 == boton5 && boton5 == boton7) || (boton4 == boton5 && boton5 == boton6) || (boton7 == boton8 && boton8 == boton9) || (boton1 == boton4 && boton4 == boton7) || (boton2 == boton5 && botaon5 == boton8) || (boton3 == boton6 && boton6 == boton9)) {
    let boton = document.getElementById("nuevo");
    document.getElementById("win_text").classList.add("visible");
    boton.addEventListener("click", () => {
      window.location.reload();
    })

    // var bandera = confirm(texto + " ah ganado\nQuieres jugar de nuevo?");
    
    // if(bandera == true) 
  
    // comprobacion = true;
 }

  if(contador == 10 && comprobacion == false){
    let boton2 = document.getElementById("nuevo2");
    document.getElementById("empate_text").classList.add("visible");
    boton2.addEventListener("click", () => {
      window.location.reload();
    })

    // var bandera = confirm("EMPATE, jugar de Nuevo?");
    // if(bandera == true) window.location.reload();
  }
}