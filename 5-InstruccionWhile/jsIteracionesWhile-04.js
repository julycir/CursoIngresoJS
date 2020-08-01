/*CIRAOLO JULIETA
EJERCICIO 4

al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	var numeroIngresado;
	numeroIngresado = prompt("ingrese un número entre 0 y 10.");

	var numeroValidado;
	numeroValidado = txtIdNumero.value;

	while (numeroIngresado >= 0 && numeroIngresado <= 9) {
		numeroValidado = numeroIngresado;
	}	
}