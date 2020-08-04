/*CIRAOLO JULIETA
Ejercicio 10

Al presionar el botón pedir números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */

function mostrar()
{
	var respuesta;
	var numeroIngresado;
	var sumaNegativos;
	var sumaPositivos;
	var cantidadPositivos;
	var cantidadNegativos;
	var cantidadCeros;
	var cantidadPares;
	var promedioPositivos;
	var promedioNegativos;
	var diferencia;

	respuesta = "si";
	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;
	promedioPositivos = "no se han ingresado numeros positivos.";
	promedioNegativos = "no se han ingresado numeros negativos.";

	do { //se ejecuta al menos una sola vez
		do {
			numeroIngresado = prompt("Ingrese un numero.");
			numeroIngresado = parseInt(numeroIngresado);

			if (numeroIngresado < 0) {
				sumaNegativos = sumaNegativos + numeroIngresado;
				cantidadNegativos++;
			} else if (numeroIngresado > 0) {
				sumaPositivos = sumaPositivos + numeroIngresado;
				cantidadPositivos++;
			} else {
				cantidadCeros++;
			}

			if (numeroIngresado % 2 == 0) {
				cantidadPares++;
			}

		} while(isNaN(numeroIngresado));

		respuesta = prompt("desea continuar? si o no");

	} while (respuesta != "no"); // hasta que el usuario responda NO

	if (cantidadPositivos != 0) {
		promedioPositivos = sumaPositivos / cantidadPositivos;
	}

	if (cantidadNegativos != 0) {
		promedioNegativos = sumaNegativos / cantidadNegativos;
	}

	diferencia = sumaPositivos - sumaNegativos;
		
	document.write("La suma de negativos es: " + sumaNegativos + ".<br /> La suma de los positivos es: " + sumaPositivos + ".<br />La cantidad de positivos es: " + cantidadPositivos + ".<br />La cantidad de negativos es: " + cantidadNegativos + ".<br />La cantidad de ceros es: " + cantidadCeros + ".<br />La cantidad de números pares es: " + cantidadPares + ".<br />El promedio de positivos es: " + promedioPositivos + ".<br />El promedio de negativos es: " + promedioNegativos + ".<br />La diferencia entre positivos y negativos es: " + diferencia + ".");
}

