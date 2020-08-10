/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contadorIntentos;
var numeroIngresado;
var cuantoFalta;
var cuantoSobra;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 100
	numeroSecreto = Math.floor(Math.random() * 101); 

	console.log(numeroSecreto);

	txtIdIntentos.value

}

function verificar()
{
	numeroIngresado = txtIdNumero.value;

	if (numeroIngresado == numeroSecreto) {
		alert("Usted es un ganador!!! y en solo X intentos")
	} else {
		if (numeroIngresado > numeroSecreto) {
			cuantoSobra = numeroIngresado - numeroSecreto;
			alert("Usted se paso " + cuantoSobra + " del numero secreto.");
		} else {
			cuantoFalta = numeroSecreto - numeroIngresado;
			alert("Le faltaron " + cuantoFalta + " numero para llegar al secreto.");
		}
	}
}