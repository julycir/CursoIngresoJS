/*CIRAOLO JULIETA 
parcial 2019 ejercicio 4

Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la resta es xxx y superó el 10".*/


function mostrar()
{
	var numeroUno;
	var numeroDos;
	var numerosConcatenados;
	var sumaNumeros;
	var restaNumeros;

	numeroUno = parseInt(prompt("Ingrese el primer numero"));
	while(isNaN(numeroUno)) {
		numeroUno = parseInt(prompt("Por favor, ingrese un numero valido"));
	}
	numeroDos = parseInt(prompt("Ingrese el segundo numero"));
	while(isNaN(numeroDos)) {
		numeroDos = parseInt(prompt("Por favor, ingrese un numero valido"));
	}

	//Si son iguales los muestro concatenados.
	if (numeroUno === numeroDos) {
		numerosConcatenados = "" + numeroUno + numeroDos;
		alert("Los numeros ingresados son iguales entre si: " + numerosConcatenados);
	}

	//Si el primero es mayor, los resto, de lo contrario los sumo.
	if (numeroUno > numeroDos) {
		restaNumeros = numeroUno - numeroDos;
		alert("El primer numero es mas grande que el segundo y el resultado de la resta de ambos es: " + restaNumeros);
	} else {
		sumaNumeros = numeroUno + numeroDos;
		alert("El segundo numero es mas grande que el primero y el resultado de la suma de ambos es: " + sumaNumeros);
	}

	//Si la resta es mayor a 10 ,además de mostrar el resultado, muestro el mensaje "la resta es xxx y superó el 10".*/
	if (restaNumeros > 10) {
		alert("la resta es " + restaNumeros + " y superó el 10");
	}
}

