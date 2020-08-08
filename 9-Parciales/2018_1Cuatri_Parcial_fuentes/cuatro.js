/*CIRAOLO Julieta
Parcial 2018 - Ejercicio 4
Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro concatenados.
Si el primero es mayor, los resto,
de lo contrario los sumo.
Si la suma es mayor a 10 ,además de mostrar el resultado, muestro el mensaje
"la suma es xxx y supero el 10".*/

function mostrar()
{
	var numero1;
	var numero2;
	var suma;

	numero1 = parseInt(prompt("Ingrese un numero"));
	numero2 = parseInt(prompt("Ingrese un numero"));

	if (numero1 === numero2) {
		alert("" + numero1 + numero2);
	}

	if (numero1 > numero2) {
		alert("La resta de ambos numeros es " + numero1 - numero2);
	}

	suma = numero1 + numero2;

	if (numero1 < numero2) {
		alert("La suma de ambos numeros es " + suma);
	}

	if(suma > 10) {
		alert("La suma es " + suma + " y supero el 10.");
	}
}
