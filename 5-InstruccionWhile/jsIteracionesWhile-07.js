/*CIRAOLO JULIETA
Ejercicio 7

Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar()
{
	var contador;
	var acumulador;
	var respuesta;
	var numero;
	contador = 0;
	acumulador = 0; // le vamos a sumar valores a esto
	respuesta = "si";

	while (respuesta != "no") { // (respuesta === "si") tambien podria ir - PRIMERO HAY QUE RESOLVER ESTO

		numero = prompt("Ingrese un numero.");
		numero = parseInt(numero); // una vez que tomamos numeros, tenemos que validar el tipo de dato

		while(isNaN(numero)) { // repasar esto!!
			numero = prompt("Ingrese un numero.");
			numero = parseInt(numero);
		}

		acumulador = acumulador + numero;
		contador++;

		respuesta = prompt("Desea continuar?");
	}

	txtIdSuma.value=acumulador;
	txtIdPromedio.value=acumulador/contador;

}//FIN DE LA FUNCIÓN