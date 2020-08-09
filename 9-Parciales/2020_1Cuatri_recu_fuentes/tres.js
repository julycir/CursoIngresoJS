/*CIRAOLO JULIETA 
EJERCICIO 3
Bienvenidos.
En el ingreso a un viaje en avión nos solicitan nombre, nacionalidad , edad, sexo("f" o "m") y estado civil("soltero", "casado" o "viudo")y temperatura corporal.
a) la Nacionalidad de la persona con mas temperatura.
b) Cuantos mayores de edad( más de 17) estan solteros
c) La cantidad de Mujeres que hay solteras o viudas.
d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
e) El promedio de edad entre las mujeres casadas.*/

function mostrar()
{
	var respuesta;

	var nombre;
	var nacionalidad;
	var edad;
	var sexo;
	var estadoCivil;
	var temperaturaCorporal;

	var nacionalidadMayorTemperatura;
	var mayorTemperatura;
	var banderaTemperatura;
	var cantidadMayoresSolteros;
	var mujeresSolterasOViudas;
	var mayoresCon38;
	var acumuladoEdadesCasadas;
	var cantidadMujeresCasadas;
	var promedioEdadCasadas;

	respuesta = true;

	banderaTemperatura = true;

	cantidadMayoresSolteros = 0;
	mujeresSolterasOViudas = 0;	
	acumuladoEdadesCasadas = 0;
	cantidadMujeresCasadas = 0;
	mayoresCon38 = 0;

	do {
		nombre = prompt("Ingrese su nombre.");

		nacionalidad = prompt("Ingrese su nacionalidad.");

		edad = prompt("Ingrese su edad.");
		edad = parseInt(edad);
		//validando ingreso de edad
		while(isNaN(edad) || edad < 0 || edad > 120) {
				edad = prompt("Por favor, ingrese una edad valida.");
				edad = parseInt(edad);
			}

		sexo = prompt("Ingrese su sexo: femenino o masculino.");
		//validando que ingrese solo femenino o masculino
		while (sexo != "femenino" && sexo != "masculino") {
			sexo = prompt("Por favor, ingrese su sexo: femenino o masculino.");
		}
	
		estadoCivil = prompt("Ingrese su estado civil.");
		//validando que ingrese estado civil valido
		while (estadoCivil != "soltero" && estadoCivil != "casado" && estadoCivil != "divorciado" && estadoCivil != "viudo") {
			estadoCivil = prompt("Ingrese un estado civil valido.");
		}

		temperaturaCorporal = prompt("Ingrese su temperatura corporal.");
		temperaturaCorporal = parseInt(temperaturaCorporal);
		//validando temperatura valida
		while(isNaN(temperaturaCorporal) || temperaturaCorporal < 35 || temperaturaCorporal > 41) {
			temperaturaCorporal = prompt("por favor, ingrese una temperatura corporal valida, entre 36 y 40");
			temperaturaCorporal = parseInt(temperaturaCorporal);
		}

		//(a) la Nacionalidad de la persona con mas temperatura.
		if (banderaTemperatura) {
			banderaTemperatura = false;
			nacionalidadMayorTemperatura = nacionalidad;
			mayorTemperatura = temperaturaCorporal;
		} else {
			if (temperaturaCorporal > mayorTemperatura) {
				nacionalidadMayorTemperatura = nacionalidad;
				mayorTemperatura = temperaturaCorporal;
			}
		}

		//b) Cuantos mayores de edad( más de 17) estan solteros
		if (edad > 17 && estadoCivil == "soltero") {
			cantidadMayoresSolteros++;
		}

		//c) La cantidad de Mujeres que hay solteras o viudas.
		if (sexo == "femenino" && estadoCivil == "soltero" || estadoCivil == "viudo") {
			mujeresSolterasOViudas++;
		}

		//d) cuantas personas de la tercera edad( mas de 60 años) , tienen mas de 38 de temperatura
		if (edad > 59 && temperaturaCorporal > 37) {
			mayoresCon38++;
		}

		//e) El promedio de edad entre las mujeres casadas.
		if (sexo == "femenino" && estadoCivil == "casado") {
			acumuladoEdadesCasadas += edad;
			cantidadMujeresCasadas++;
		}

		respuesta = confirm("Desea continuar?");

		} while (respuesta); // hasta que el usuario quiera

		promedioEdadCasadas = acumuladoEdadesCasadas / cantidadMujeresCasadas;

		document.write("a) la Nacionalidad de la persona con mas temperatura es: " + nacionalidadMayorTemperatura + ".<br />b) Hay " + cantidadMayoresSolteros + " mayores de edad (más de 17) que estan solteros.<br />c) La cantidad de Mujeres que hay solteras o viudas es: " + mujeresSolterasOViudas + ".<br />d) Hay " + mayoresCon38 + " personas de la tercera edad (mas de 60 años) con mas de 38 de temperatura.<br />e) El promedio de edad entre las mujeres casadas es: " + promedioEdadCasadas + ".");
}



