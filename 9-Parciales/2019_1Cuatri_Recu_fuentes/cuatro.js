/*CIRAOLO JULIETA
recuperatorio 2019 - ejercicio 4 
Enunciado:
Bienvenidos (IF).
Pedir dos números y mostrar el resultado:
Si son iguales los muestro el cuadrado del numero.
Si el primero divisible por el segundo, los resto,
de lo contrario muestro solo el resto.
si el resto es mayor a 3(tres ) informarlo por alert.*/

function mostrar()
{
	var numero1;
	var numero2;
	var resultado;

	resultado = 0;

	numero1 = parseInt(prompt("Ingrese el primer numero"));
	numero2 = parseInt(prompt("Ingrese el segundo numero"));

	if (numero1 === numero2) {
		resultado = numero1 * numero2;
		alert("Los numeros son iguales entre si y el resultado del cuadrado es: " + resultado + ".");
	}

	if (numero1 % numero2 === 0) {
		resultado = numero1 - numero2;
		alert("El numero 1 es divisible por el numero 2 y el resultado de la resta es: " + resultado + ".");
	} else {
		resultado = numero1 % numero2;
		if (resultado > 3) {
			alert("El numero 1 NO es divisible por el numero 2 y el resultado del resto es mayor a 3");
		}
		alert("El numero 1 NO es divisible por el numero 2 y el resultado del resto es: " + resultado + ".");
	}
}
