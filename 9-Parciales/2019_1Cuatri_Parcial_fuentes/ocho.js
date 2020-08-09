/*CIRAOLO JULIETA 
parcial 2019 ejercicio 8

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
( k , 7) */

function mostrar()
{
	var letra;
	var numero;
	var respuesta;
	var cantidadPares;
	var cantidadImpares;
	var cantidadCeros;
	var acumuladorPositivos;
	var cantidadPositivos;
	var promedioPositivos;
	var sumaNegativos;
	var numeroMaximo;
	var letraMaximo;
	var banderaMaximo;
	var numeroMinimo;
	var letraMinimo;
	var banderaMinimo;

	respuesta = true;
	cantidadPares = 0;
	cantidadImpares = 0;
	cantidadCeros = 0;
	acumuladorPositivos = 0;
	cantidadPositivos = 0;
	sumaNegativos = 0;
	banderaMinimo = true;
	banderaMaximo = true;

	while (respuesta) {
		letra = prompt("Ingrese una letra.");

		numero = parseInt(prompt("Ingrese un numero."));
		while (isNaN(numero) || numero < -100 || numero > 100) {
			numero = parseInt(prompt("Por favor, ingrese un numero valido, entre -100 y 100."));
		}

		if (numero % 2 == 0){
			cantidadPares++;
		} 

		if (numero % 2 == 1) {
			cantidadImpares++;
		}

		if (numero > 0) {
			acumuladorPositivos += numero;
			cantidadPositivos++;
		} else if (numero < 0) {
			sumaNegativos += numero;
		} else {
			cantidadCeros++;
		}

		if (banderaMaximo) {
			banderaMaximo = false;
			numeroMaximo = numero;
			numeroMinimo = numero;
		} else {
			if (numero > numeroMaximo) {
				numeroMaximo = numero;
				letraMaximo = letra;
			}
			if (numero < numeroMinimo) {
				numeroMinimo = numero;
				letraMinimo = letra;
			}
		}

		respuesta = confirm("Desea continuar?");
	}
	//d) El promedio de todos los números positivos ingresados.
	promedioPositivos = acumuladorPositivos / cantidadPositivos;
	promedioPositivos.toFixed(0);

	document.write("a) La cantidad de números pares es: " + cantidadPares + ".<br />b) La cantidad de números impares es: " + cantidadImpares + ".<br />c) La cantidad de ceros es: " + cantidadCeros + ".<br />d) El promedio de todos los números positivos ingresados es: " + promedioPositivos + ".<br />e) La suma de todos los números negativos es: " + sumaNegativos + ".<br />f) El número y la letra del máximo es:  " + numeroMaximo + " y " + letraMaximo + ". El número y la letra del mínimo es: " + numeroMinimo + " y " + letraMinimo + ".");
}


