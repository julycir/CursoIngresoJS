/*CIRAOLO JULIETA 
EJERCICIO 3
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.

a) El nombre de la persona con mas temperatura.
b) Cuantos mayores de edad estan viudos
c) La cantidad de hombres que hay solteros o viudos.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre los hombres solteros.
*/

function mostrar()
{

	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;

	var banderaMayorTemperatura;
	var mayorTemperatura;
	var nombreMayorTemperatura;
	var cantidadMayoresViudos;
	var cantidadHombresSolterosOViudos;
	var mayoresCon38;
	var acumuladoEdadHombresSolteros;
	var cantidadHombresSolteros;
	var promedioEdadHombresSolteros;

	var respuesta;

	banderaMayorTemperatura = true;
	cantidadMayoresViudos = 0;
	cantidadHombresSolterosOViudos = 0;
	mayoresCon38 = 0;

	acumuladoEdadHombresSolteros = 0;
	cantidadHombresSolteros = 0;

	respuesta = true;

	do {
		nombre = prompt("Ingrese su nombre.");

		nacionalidad = prompt("Ingrese su nacionalidad.");

		edad = prompt("Ingrese su edad.");
		edad = parseInt(edad);
		//validando ingreso de edad
		while (isNaN(edad) || edad < 0 || edad > 120) {
				edad = prompt("Por favor, ingrese una edad valida.");
				edad = parseInt(edad);
		}

		sexo = prompt("Ingrese su sexo: f o m.");
		//validando que ingrese solo femenino o masculino
		while (sexo != "f" && sexo != "m") {
			sexo = prompt("Por favor, ingrese su sexo: f o m.");
		}
	
		estadoCivil = prompt("Ingrese su estado civil.");
		//validando que ingrese estado civil valido
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "divorciado" && estadoCivil != "viudo") {
			estadoCivil = prompt("Ingrese un estado civil valido.");
		}

		temperaturaCorporal = prompt("Ingrese su temperatura corporal.");
		temperaturaCorporal = parseInt(temperaturaCorporal);
		//validando temperatura valida
		while (isNaN(temperaturaCorporal) || temperaturaCorporal < 35 || temperaturaCorporal > 41) {
			temperaturaCorporal = prompt("por favor, ingrese una temperatura corporal valida, entre 36 y 40");
			temperaturaCorporal = parseInt(temperaturaCorporal);
		}

		//a) El nombre de la persona con mas temperatura.
		if (banderaMayorTemperatura) {
			banderaMayorTemperatura = false;
			nombreMayorTemperatura = nombre;
			mayorTemperatura = temperaturaCorporal;
		} else {
			if (temperaturaCorporal > mayorTemperatura) {
				nombreMayorTemperatura = nombre;
				mayorTemperatura = temperaturaCorporal;
			}
		}

		//b) Cuantos mayores de edad estan viudos
		if (edad > 17 && estadoCivil == "viudo") {
			cantidadMayoresViudos++;
		}

		//c) La cantidad de hombres que hay solteros o viudos
		if (sexo == "m" && estadoCivil == "soltero" || estadoCivil == "viudo") {
			cantidadHombresSolterosOViudos++;
		}

		//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		if (edad > 59 && temperatura > 37) {
			mayoresCon38++;
		}

		//e) El promedio de edad entre los hombres solteros.
		if (sexo == "m" && estadoCivil == "soltero") {
			acumuladoEdadHombresSolteros += edad;
			cantidadHombresSolteros++;
		}

		respuesta = confirm("Desea seguir ingresando pasajeros?");

	} while (respuesta);

	promedioEdadHombresSolteros = acumuladoEdadHombresSolteros / cantidadHombresSolteros;

	document.write("a) El nombre de la persona con mas temperatura es: " + nombreMayorTemperatura + ".<br /> b) Hay " + cantidadMayoresViudos + " mayores de edad viudos.<br />c) La cantidad de hombres que hay solteros o viudos es: " + cantidadHombresSolterosOViudos + ".<br />d) Hay " + mayoresCon38 + " personas de la tercera edad (mas de 60 años) con mas de 38 de temperatura.<br />e) El promedio de edad entre los hombres solteros es: " + promedioEdadHombresSolteros + ".");
}


