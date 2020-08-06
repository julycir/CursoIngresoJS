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
	var mayoresDeEdad;
	var terceraEdad;
	var sexo;
	var cantidadMujeres;
	var cantidadHombres;
	var estadoCivil;
	var cantidadSolteros;
	var cantidadViudos;
	var cantidadCasados;
	var temperaturaCorporal;
	respuesta = true
	cantidadMujeres = 0;
	cantidadHombres = 0;
	cantidadSolteros = 0;
	cantidadViudos = 0;
	cantidadCasados = 0;

	do {
		nombre = prompt("Ingrese su nombre.");
		nacionalidad = prompt("Ingrese su nacionalidad");

		edad = prompt("Ingrese su edad");
		edad = parseInt(edad);

		//validando ingreso de edad
		while(isNaN(edad) || edad < 0 || edad > 120) {
				edad = prompt("por favor, ingrese una edad valida");
			}

		sexo = prompt("Ingrese su sexo: femenino o masculino");
		//validando que ingrese solo femenino o masculino
		while (sexo != "femenino" || sexo != "masculino") {
			sexo = prompt("Por favor, ingrese su sexo: femenino o masculino");
		}
	
		//contando numero mujeres y hombres
		switch (sexo) { 
			case "femenino":
				cantidadMujeres = cantidadMujeres + 1;
				break
			case "masculino":
				cantidadHombres = cantidadHombres +1;
				break
		}

		estadoCivil = prompt("Ingrese su estado civil");
		//validando que ingrese estado civil valido
		while (!(estadoCivil = "soltero" || estadoCivil = "casado" || estadoCivil = "viudo")) {
			estadoCivil = prompt("Ingrese un estado civil valido")
		}

		//contando segun estado civil
		switch (estadoCivil) {
			case "soltero":
				cantidadSolteros = cantidadSolteros + 1;
				break;
			case "casado":
				cantidadCasados = cantidadCasados + 1;
				break;
			case "viudo":
				cantidadViudos = cantidadViudos + 1;
				break;
		}

		temperaturaCorporal = prompt("Ingrese su temperatura corporal");
		temperaturaCorporal = parseInt(temperaturaCorporal);
		while(isNaN(temperaturaCorporal) || temperaturaCorporal < 35 || temperaturaCorporal > 41) {
			temperaturaCorporal = prompt("por favor, ingrese una temperatura corporal valida, entre 36 y 40");
		}

		respuesta = confirm("Desea continuar?");

		} while (respuesta);
}
