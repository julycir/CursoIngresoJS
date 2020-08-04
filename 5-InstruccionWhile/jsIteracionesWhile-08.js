/*CIRAOLO JULIETA 
Ejercicio 8

Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/

function mostrar()
{
	var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = 'si';

	numeroIngresado = prompt("Ingrese un numero.");
	numeroIngresado = parseInt(numeroIngresado); 
	respuesta = prompt("Desea continuar?");

	while (respuesta === "si") { 

		numeroIngresado = prompt("Ingrese un numero.");
		numeroIngresado = parseInt(numeroIngresado); 

		while(isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Error, por favor ingrese un numero.");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if (numeroIngresado >= 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;
		} else { 
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		
		respuesta = prompt("Desea continuar?");
	}
 	
	txtIdSuma.value = sumaPositivos;
	txtIdProducto.value = multiplicacionNegativos;

	console.log(sumaPositivos);
	console.log(multiplicacionNegativos);
}