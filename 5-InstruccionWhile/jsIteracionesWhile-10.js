/*CIRAOLO JULIETA
Ejercicio 10 while

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
9-Diferencia entre positivos y negativos, (positvos-negativos). 

Mostrar con document.write*/

function mostrar()
{
	var respuesta; //cuando el usuario modifique la respuesta, se termine el bucle
	var numeroIngresado; //lo que el usuario ingresa
	var sumaNegativos; //1
	var sumaPositivos; //2
	var cantidadPositivos; //3
	var cantidadNegativos; //4
	var cantidadCeros; //5
	var cantidadPares; //6
	var promedioPositivos; //7
	var promedioNegativos; //8
	var diferencia; //9

	respuesta = "si";
	sumaNegativos = 0;
	sumaPositivos = 0;
	cantidadPositivos = 0;
	cantidadNegativos = 0;
	cantidadCeros = 0;
	cantidadPares = 0;
	promedioPositivos = "no se han ingresado numeros positivos";
	promedioNegativos = "no se han ingresado numeros negativos";

	do { //se ejecuta al menos una sola vez
		do {
			numeroIngresado = prompt("Ingrese un numero.");
			numeroIngresado = parseInt(numeroIngresado);

			if (numeroIngresado < 0) {
				sumaNegativos = sumaNegativos + numeroIngresado;
				cantidadNegativos++; //si el numero es positivo, lo sumamos y contamos
			} else if (numeroIngresado > 0) {
				sumaPositivos = sumaPositivos + numeroIngresado;
				cantidadPositivos++; //si el numero es negativo, lo sumamos y contamos
			} else {
				cantidadCeros++; //si el numero es cero, lo sumamos y contamos
			}

			if (numeroIngresado % 2 == 0) {
				cantidadPares++; //si el numero es par, lo contamos
			}

		} while(isNaN(numeroIngresado)); //validando que el usuario ingrese un numero

		respuesta = prompt("desea continuar? si o no"); 
		if (isNaN(respuesta)) {
			respuesta = prompt("por favor, ingrese si o no"); //validando que ingrese SI o NO
		}

	} while (respuesta != "no"); // hasta que el usuario responda NO

	if (cantidadPositivos != 0) {
		promedioPositivos = sumaPositivos / cantidadPositivos;
		promedioPositivos = promedioPositivos.toFixed(0);
	}

	if (cantidadNegativos != 0) {
		promedioNegativos = sumaNegativos / cantidadNegativos;
		promedioNegativos = promedioNegativos.toFixed(0);
	}

	diferencia = sumaPositivos - sumaNegativos;
		
	document.write("La suma de negativos es: " + sumaNegativos + ".<br /> La suma de los positivos es: " + sumaPositivos + ".<br />La cantidad de positivos es: " + cantidadPositivos + ".<br />La cantidad de negativos es: " + cantidadNegativos + ".<br />La cantidad de ceros es: " + cantidadCeros + ".<br />La cantidad de números pares es: " + cantidadPares + ".<br />El promedio de positivos es: " + promedioPositivos + ".<br />El promedio de negativos es: " + promedioNegativos + ".<br />La diferencia entre positivos y negativos es: " + diferencia + ".");
}

