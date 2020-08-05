/*CIRAOLO JULIETA 
parcial 2019 ejercicio 2

Enunciado:
Bienvenidos.
A una pareja se le pide los datos para mostrar un mensaje " ustedes se llaman xxxxx y xxxx pesan xx y xx kilos, que sumados son xx kilos y el promedio de peso xx ".*/

function mostrar()
{
	var nombreUno;
	var nombreDos;
	var pesoUno;
	var pesoDos;
	var pesoTotal;
	var promedioPeso;

	nombreUno = prompt("Ingrese el nombre del integrante 1 de la pareja");
	pesoUno = parseInt(prompt("Integrante 1: ingrese su peso en kilogramos"));
	while(pesoUno < 25) {
		pesoUno = parseInt(prompt("Integrante 1: por favor, ingrese su peso en kilogramos"));
	}
	nombreDos = prompt("Ingrese el nombre del integrante 2 de la pareja");
	pesoDos = parseInt(prompt("Integrante 2: ingrese su peso en kilogramos"));
	while(pesoDos < 25) {
		pesoDos = parseInt(prompt("Integrante 2: por favor, ingrese su peso en kilogramos"));
	}

	pesoTotal = pesoUno + pesoDos;
	promedioPeso = pesoTotal / 2;

	alert("Ustedes se llaman " + nombreUno + " y " + nombreDos + ", pesan " + pesoUno + " y " + pesoDos + " kilos, que sumados son " + pesoTotal + " kilos y el promedio del peso de ustedes es " + promedioPeso);
}
