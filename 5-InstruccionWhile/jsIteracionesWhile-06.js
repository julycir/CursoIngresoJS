/*CIRAOLO JULIETA 
EJERCICIO 6
Enunciado:
Al presionar el botón pedir 5 números e informar la suma acumulada y el promedio.*/

function mostrar()
{
	var contador;
	var acumulador;
	var numerosIngresados;
	var sumaAcumulada;
	var promedio;

	contador = 0;
	acumulador = 0;

	numerosIngresados = prompt("Ingrese 5 numeros.");
	numerosIngresados = parseInt(numerosIngresados);

	while (contador < 5) {
		numerosIngresados = prompt("Ingrese 5 numeros.");
		numerosIngresados = parseInt(numerosIngresados);
		contador = contador + 1;
		acumulador = acumulador + numerosIngresados;
	}
 	
 	sumaAcumulada = acumulador;
 	promedio = acumulador / contador;
	
	txtIdSuma.value = sumaAcumulada;
	txtIdPromedio.value = promedio;

	console.log(sumaAcumulada);
	console.log(promedio);
}