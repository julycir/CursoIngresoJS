/*CIRAOLO JULIETA
Ejercicio 7

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/

function mostrar()
{
	var contador;
	var acumulador;
	var numeroIngresado;
	var sumaAcumulada;
	var promedio;
	var respuesta;

	contador = 0;
	acumulador = 0;
	respuesta = "si";

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

		contador = contador + 1;
		acumulador = acumulador + numeroIngresado;

		respuesta = prompt("Desea continuar?");
	}
 	
 	sumaAcumulada = acumulador;
 	promedio = acumulador / contador;
	
	txtIdSuma.value = sumaAcumulada;
	txtIdPromedio.value = promedio;

	console.log(sumaAcumulada);
	console.log(promedio);
}
