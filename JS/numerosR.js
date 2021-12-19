var runtime = false;
var listNumeros;
var h = 0;
var m = 0;
var s = 0;
var userScore = 0;

function dibujaMatriz(tamanoMatriz){

	let cuadro =  '<td>'
				+ 	'<button class="btn btn-blow"><span class=""><h1>{0}</h1></span></button>'
				+ '</td>';
	let posicion = 0;

	for(let i=0; i<tamanoMatriz; i++){
		$('#tablaMatriz').append('<tr>');
		for(let j=0; j<tamanoMatriz; j++){
			$('#tablaMatriz').append(cuadro.format(listNumeros[posicion]));
			posicion++;
		}
		$('#tablaMatriz').append('</tr>');
	}

}

function nivel(nivel){    
    let contadorCliks = 0;
    let tamanoMatriz = nivel + 1;

    $('#tablaMatriz').on('click', function(){
        if(!runtime){
            cronometrar();
            runtime = true;  
        }      
        let tabla = $(this);        
    });

    generaListadoNumeros(tamanoMatriz);
    dibujaMatriz(tamanoMatriz);
    var listaOrdenada = ordenaListadoNumeros();

    $( "td" ).click(function() {                    
        var numero = $(this).text();
        if(listaOrdenada[contadorCliks] == numero){
            $(this).html('');
            contadorCliks++;
            userScore++;
        }else{
            userScore = (userScore == 0 ? 0 : userScore - 1);
        }

        $('#score').text(userScore);
    });

}

function generaListadoNumeros(tamanoMatriz){
	let total = tamanoMatriz * tamanoMatriz;
	listNumeros = [total];
	let random = getRandomInt(0, 100);

	for(let i=0; i<total; i++){

		while(recurrencia(random, total)){            
			random = getRandomInt(0, 100);
        }

		listNumeros[i] = random; 
	}

	return listNumeros;
}

function ordenaListadoNumeros(){
    return listNumeros.sort((a, b) => a-b);    
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function recurrencia(random, total){
	for(let i=0; i<total; i++){
		if(listNumeros[i]==random)
			return true;
	}
	return false;
}

/**
 * Sobrecarga el objeto String con el método format, el cual sustite {n} en la 
 * cadena original, por el (n) parámetro enviado.
 * 
 * @returns {String.prototype@call;replace}
 */
String.prototype.format = function () {
  var args = arguments;
  return this.replace(/\{\{|\}\}|\{(\d+)\}/g, function (m, n) {
    if (m === "{{") {
      return "{";
    }
    if (m === "}}") {
      return "}";
    }
    return args[n];
  });
};

////////////////////////////////////////////////////////////////////////////////////

function cronometrar(){
    escribir();
    id = setInterval(escribir,1000);    
}

function escribir(){
    let hAux, mAux, sAux;
    s++;
    if (s>59){m++;s=0;}
    if (m>59){h++;m=0;}
    if (h>24){h=0;}

    if (s<10){sAux="0"+s;}else{sAux=s;}
    if (m<10){mAux="0"+m;}else{mAux=m;}
    if (h<10){hAux="0"+h;}else{hAux=h;}

    $("#hms").html(hAux + ":" + mAux + ":" + sAux);
}

function parar(){
    clearInterval(id);
    document.querySelector(".start").addEventListener("click",cronometrar);
}

function reiniciar(){
    clearInterval(id);
    document.getElementById("hms").innerHTML="00:00:00";
    h=0;m=0;s=0;
    document.querySelector(".start").addEventListener("click",cronometrar);
}