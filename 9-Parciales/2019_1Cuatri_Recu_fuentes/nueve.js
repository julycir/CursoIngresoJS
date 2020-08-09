/*CIRAOLO JULIETA
recuperatorio 2019 - ejercicio 9

Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un estudiante, la edad (validar) , el sexo (validar) y la nota del final (validar)
hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de varones aprobados
b) El promedio de notas de los menores de edad
c) El promedio de notas de los adolescentes.
d) El promedio de notas de los mayores
f) El promedio de notas por sexo masculino y femenino
*/

function mostrar()
{
	var nombre;
	var edad;
	var sexo;
	var nota;
	var respuesta;

	var cantidadVaronesAprobados;

	var notasMenores;
	var cantidadMenores;
	var promedioMenores;

	var notasAdolescentes;
	var cantidadAdolescentes;
	var promedioAdolescentes;

	var notasMayores;
	var cantidadMayores;
	var promedioMayores;

	var notasMasculino;
	var cantidadMasculino;
	var promedioMasculino;

	var notasFemenino;
	var cantidadFemenino;
	var promedioFemenino;

	respuesta = true;
	cantidadVaronesAprobados = 0;
	notasMenores = 0;
	cantidadMenores = 0;
	notasAdolescentes = 0;
	cantidadAdolescentes = 0;
	notasMayores = 0;
	cantidadMayores = 0;
	notasMasculino = 0;
	cantidadMasculino = 0;
	notasFemenino = 0;
	cantidadFemenino = 0;

	while (respuesta) {

		nombre = prompt("Ingrese su nombre.");

		edad = parseInt(prompt("Ingrese su edad."));

		//valido edad, que sea numero y entre rangos
		while (isNaN(edad) || edad < 6 || edad > 115) {
			edad = parseInt(prompt("Ingrese una edad entre 6 y 115."));
		} // probado, funciona

		sexo = prompt("Ingrese su sexo.");

		//valido sexo femenino o masculino
		while (sexo != "femenino" && sexo != "masculino") {
			sexo = prompt("Por favor, ingrese sexo femenino o masculino.");
		} // probado, funciona

		nota = parseInt(prompt("Ingrese su nota."));

		//valido nota, que sea numero y del 1 al 10
		while (isNaN(nota) || nota < 1 || nota > 10) {
			nota = parseInt(prompt("Por favor, ingrese su nota del 1 al 10."));
		}

		//a) La cantidad de varones aprobados
		if (sexo == "masculino" && nota > 6) {
			cantidadVaronesAprobados++;
		}

		//b) El promedio de notas de los menores de edad 
		if (edad < 18) {
			notasMenores += nota;
			cantidadMenores++;
		}

		//c) El promedio de notas de los adolescentes.
		if (edad > 12 && edad < 18) {
			notasAdolescentes += nota;
			cantidadAdolescentes++;
		}

		//d) El promedio de notas de los mayores
		if (edad > 17) {
			notasMayores += nota;
			cantidadMayores++;
		}

		//f) El promedio de notas por sexo masculino y femenino
		if (sexo == "masculino") {
			notasMasculino += nota;
			cantidadMasculino++;
		}

		if (sexo == "femenino") {
			notasFemenino += nota;
			cantidadFemenino++;
		}

		respuesta = confirm("Desea seguir ingresando?"); //doy a elegir al usuario si quiere seguir o no 
	}

	//b) El promedio de notas de los menores de edad 
	promedioMenores = notasMenores / cantidadMenores;

	//c) El promedio de notas de los adolescentes.
	promedioAdolescentes = notasAdolescentes / cantidadAdolescentes;

	//d) El promedio de notas de los mayores
	promedioMayores = notasMayores / cantidadMayores;

	//f) El promedio de notas por sexo masculino y femenino
	promedioMasculino = notasMasculino / cantidadMasculino;
	promedioFemenino = notasFemenino / cantidadFemenino;

	document.write("a) La cantidad de varones aprobados es: " + cantidadVaronesAprobados + ".<br />b) El promedio de notas de los menores de edad es: " + promedioMenores + ".<br />c) El promedio de notas de los adolescentes es: " + promedioAdolescentes + ".<br />d) El promedio de notas de los mayores es: " + promedioMayores + ".<br />f) El promedio de notas por sexo masculino es: " + promedioMasculino + " y el promedio de notas por sexo femenino es: " + promedioFemenino + ".");
}

