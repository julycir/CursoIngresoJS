/*CIRAOLO JULIETA 
parcial 2019 ejercicio 7

Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las alturas en centimetros(validar entre 0 y 250) , el sexo. (validar el sexo “f” o “m”) de 5 jugadores de básquet, informar por alert:
a) El promedio de las alturas totales.
b) La altura más baja y el sexo de esa persona.
c) La cantidad de muheres que su altura supere los 190 centimetros.*/


function mostrar()
{
	var altura;
	var sexo;
	var cantidadJugadores;
	var totalAlturas;
	var promedioAlturas;
	cantidadJugadores = 0; 
	totalAlturas = 0;

	do { 
		do {
			altura = parseInt(prompt("Ingrese la altura en centimetros."));
			totalAlturas = totalAlturas + altura;
		} while (!(altura > 0 && altura < 250));

		do {
			sexo = prompt("Ingrese su sexo.");
		} while (!(sexo == "f" || sexo == "m"));

		cantidadJugadores++;
	} while (cantidadJugadores < 5);

	promedioAlturas = totalAlturas / cantidadJugadores;
}
