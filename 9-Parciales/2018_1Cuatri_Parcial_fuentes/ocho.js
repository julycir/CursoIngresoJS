/*CIRAOLO Julieta
Parcial 2018 - Ejercicio 8

Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos, una letra y un número entre -100 y 100 (validar) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de números pares.
b) La cantidad de números impares.
c) La cantidad de ceros.
d) El promedio de todos los números positivos ingresados.
e) La suma de todos los números negativos.
f) El número y la letra del máximo y el mínimo.

Testeo con los siguientes datos
( d , -150(mal) , -50(bien))
( z , 0)
( g , 20)
( a , 150(mal) , 0(bien))
( b , 3)
( k , 7)*/

function mostrar()
{
	var letra;
	var numero;
	var respuesta;
	var cantidadPares;
	var cantidadImpares;
	var cantidadCeros;
	var cantidadPositivos;
	var acumuladorPositivos;
	var promedioPositivos;
	var cantidadNegativos;
	var sumaNegativos;
	var bandera;
	var numeroMaximo;
	var numeroMinimo; 
	var letraMaximo;
	var letraMinimo;

	respuesta = true;
	cantidadPares = 0;
	cantidadImpares = 0;
	cantidadCeros = 0;
	cantidadPositivos = 0;
	acumuladorPositivos = 0;
	promedioPositivos = "no se ingresaron numeros positivos";
	cantidadNegativos = 0;
	sumaNegativos = 0;
	bandera = true;

	do {

		do {
			letra = prompt("Ingrese una letra");
		} while (!(isNaN(letra)));

		do {
			numero = parseInt(prompt("Ingrese un numero"));
			if (isNaN(numero) || numero < -100 || numero > 100) {
				numero = parseInt(prompt("Por favor, ingrese un numero valido"));
			}

			if (numero % 2 === 0) {
				cantidadPares++;
			}

			if (numero % 2 === 1) {
				cantidadImpares++;
			}

			if (numero > 0) {
				cantidadPositivos++;
				acumuladorPositivos += numero;
			} else if (numero < 0) {
				cantidadNegativos++;
				sumaNegativos += numero;
			} else {
				cantidadCeros++;
			}

			if (bandera) {
				bandera = false;
				numeroMaximo = numero;
				numeroMinimo = numero;
				letraMaximo = letra;
				letraMinimo = letra;
			} else {
					if (numero > numeroMaximo) {
						numeroMaximo = numero;
						letraMaximo = letra;
					}
					if (numero < minimo) {
						numeroMinimo = numero;
						letraMinimo = letra;
					}
				}

		} while (isNaN(numero) || numero < -100 || numero > 100)

		promedioPositivos = acumuladorPositivos / cantidadPositivos;

		respuesta = confirm("desea continuar?");
	} while (respuesta);


	document.write("a) La cantidad de números pares es " + cantidadPares + ".<br /> b) La cantidad de números impares es " + cantidadImpares + ".<br /> c) La cantidad de ceros es " + cantidadCeros + ".<br />d) El promedio de todos los números positivos ingresados es " + promedioPositivos + ".<br />e) La suma de todos los números negativos es " + sumaNegativos + ".<br />f) El número y la letra del máximo son " +numeroMaximo + " y " + letraMaximo + " y el mínimo son "+ numeroMinimo + " y " + letraMinimo + ".");
}
