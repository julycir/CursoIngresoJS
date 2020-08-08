/*CIRAOLO Julieta
Parcial 2018 - Ejercicio 7
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso por prompt de las notas (validar entre 0 y 10) , el sexo (validar el sexo “f” o “m”) de 5 alumnos, informar por alert:
a) El promedio de las notas totales.
b) La nota más baja y el sexo de esa persona.
c) La cantidad de varones que su nota haya sido mayor o igual a 6.*/

function mostrar()
{
	var notaIngresada;
	var todasLasNotas;
	var cantidadNotas;
	var promedioNotas;
	var notaBaja;
	var notaAlta;
	var banderaNota;
	var sexoAlumnoNotaBaja;
	var cantidadVaronesNotaIgualOMayorA6;
	var promedio;
	var sexo;
	var masculinos;
	var femeninos;
	var alumnos; // contador de alumnos ingresados

	todasLasNotas = 0;
	cantidadNotas = 0;
	promedioNotas = 0;
	banderaNota = true;
	femeninos = 0;
	masculinos = 0;
	alumnos = 0;
	cantidadVaronesNotaIgualOMayorA6 = 0;

	do {
		do { // pedir nota
			notaIngresada = parseInt(prompt("Ingrese su nota"));
			todasLasNotas = todasLasNotas + notaIngresada;
			cantidadNotas++;

			if(isNaN(notaIngresada) || notaIngresada < 0 || notaIngresada > 10) {
				notaIngresada = parseInt(prompt("Por favor, ingrese una nota valida"));
				todasLasNotas = todasLasNotas + notaIngresada;
				cantidadNotas++;
			}

		} while (isNaN(notaIngresada) || notaIngresada < 0 || notaIngresada > 10); // validar numero, entre 0 y 10

		do { // pedir sexo
			sexo = prompt("Ingrese su sexo, f o m");
			if (sexo == "m") {
				masculinos++;
			} else {
				femeninos++;
			}
		} while (!(sexo == "f" || sexo == "m"));

		if (banderaNota) { //calculando nota mas baja y sexo de esa persona
			banderaNota = false;
			notaBaja = notaIngresada;
			notaAlta = notaIngresada;
		} else {
			if (notaIngresada < notaBaja) {
				notaBaja = notaIngresada;
				sexoAlumnoNotaBaja = sexo;
				if (sexo == "m") {
					sexoAlumnoNotaBaja = "masculino";
					} else {
					sexoAlumnoNotaBaja = "femenino";
					}	
				}
				if (notaIngresada > notaAlta) {
					notaAlta = notaIngresada;
			}
 		}

 		if (sexo == "m" && notaIngresada >= 6) {
 			cantidadVaronesNotaIgualOMayorA6++;
 		}
		alumnos++;
	} while (alumnos < 5);


	promedio = todasLasNotas / cantidadNotas;
	alert("El promedio de todas las notas es: " + promedio + ". La nota más baja fue " + notaBaja + " y el sexo de esa persona fue " + sexoAlumnoNotaBaja + ". La cantidad de varones con nota haya sido mayor o igual a 6 fue: " + cantidadVaronesNotaIgualOMayorA6 + ".");
}

