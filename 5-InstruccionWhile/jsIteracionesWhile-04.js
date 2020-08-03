/*CIRAOLO JULIETA
EJERCICIO 4

al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	var numeroValidado;

	while (!(numeroIngresado >= 0 && numeroIngresado <= 9)) {
		numeroIngresado = prompt("error, por favor ingrese un número entre 0 y 10.");
	}	
	numeroValidado = numeroIngresado;
	txtIdNumero.value = numeroValidado;
	console.log(numeroValidado);
}