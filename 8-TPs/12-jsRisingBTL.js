/*CIRAOLO JULIETA 
Ejercicio 12
RISING BTL. Empresa dedicada a la toma de datos para realizar estadísticas y censos nos pide realizar una carga de datos validada e ingresada por ventanas emergentes solamente (para evitar hacking y cargas maliciosas) y luego asignarla a cuadros de textos. 
12.   Los datos requeridos son los siguientes:
A.	Edad, entre 18 y 90 años inclusive.
B.	Sexo, “M” para masculino y “F” para femenino
C.	Estado civil, 1-para soltero, 2-para casados, 3-para divorciados y 4-para viudos
D.	Sueldo bruto, no menor a 8000.
E.	Número de legajo, numérico de 4 cifras, sin ceros a la izquierda.
F.	Nacionalidad, “A” para argentinos, “E” para extranjeros, “N” para nacionalizados.
 */

function ComenzarIngreso () 
{
 	//definicion de variables
 	var edadIngresada;
 	var sexoIngresado;
 	var estadoCivilIngresado;
 	var sueldoBrutoIngresado;
 	var numeroLegajoIngresado;
 	var nacionalidadIngresada;

 	//definicion de variables validadas
 	var edadValidada;
 	var sexoValidado;
 	var estadoCivilValidado;
 	var sueldoBrutoValidado;
 	var legajoValidado;
 	var nacionalidadValidada;

 	edadIngresada = prompt("Ingrese su edad");
 	edadIngresada = parseInt(edadIngresada);
 	edadValidada = edadIngresada;
 	txtIdEdad.value = edadValidada;
 
 	while (edadIngresada < 18 || edadIngresada > 90) {
 		edadIngresada = prompt("Por favor, ingrese una edad valida");
 		edadIngresada = parseInt(edadIngresada);
 		edadValidada = edadIngresada;
 		txtIdEdad.value = edadValidada;
 	}

 	sexoIngresado = prompt("Ingrese su sexo, M para masculino y F para femenino");
 	sexoValidado = sexoIngresado;
	txtIdSexo.value = sexoValidado;

	while (sexoIngresado != "M" && sexoIngresado != "F") {
 		sexoIngresado = prompt("por favor, ingrese su sexo, M para masculino y F para femenino");
 		sexoIngresado = sexoIngresado.toUpperCase();
		sexoValidado = sexoIngresado;
		txtIdSexo.value = sexoValidado;
	}
 	
 	estadoCivilIngresado = prompt("Ingrese su estado civil, 1-para solteros, 2-para casados, 3-para divorciados y 4-para viudos");
 	estadoCivilIngresado = parseInt(estadoCivilIngresado);


 	while (estadoCivilIngresado != 1 && estadoCivilIngresado != 2 && estadoCivilIngresado != 3 && estadoCivilIngresado != 4) {
 		estadoCivilIngresado = prompt("Por favor, ingrese su estado civil, 1-para solteros, 2-para casados, 3-para divorciados y 4-para viudos");
 		estadoCivilIngresado = parseInt(estadoCivilIngresado);
 	}

	switch (estadoCivilIngresado) {
		case 1:
			estadoCivilIngresado = "soltero";
			break;
		case 2:
			estadoCivilIngresado = "casado";
			break;
		case 3:
			estadoCivilIngresado = "divorciado";
			break;
		case 4:
			estadoCivilIngresado = "viudo";
			break;
	}

	estadoCivilValidado = estadoCivilIngresado;
 	txtIdEstadoCivil.value = estadoCivilValidado;

 	sueldoBrutoIngresado = prompt("Ingrese su sueldo bruto");
 	sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
 	sueldoBrutoValidado = sueldoBrutoIngresado;
 	txtIdSueldo.value = sueldoBrutoValidado;

 	while (isNaN(sueldoBrutoIngresado) || sueldoBrutoIngresado < 8000) { 
 		sueldoBrutoIngresado = prompt("Por favor, ingrese su sueldo bruto");
 		sueldoBrutoIngresado = parseInt(sueldoBrutoIngresado);
 		sueldoBrutoValidado = sueldoBrutoIngresado;
 		txtIdSueldo.value = sueldoBrutoValidado;
 	}

 	numeroLegajoIngresado = prompt("Ingrese su numero de legajo de 1000 a 9999");
 	numeroLegajoIngresado = parseInt(numeroLegajoIngresado);
	legajoValidado = numeroLegajoIngresado;
	txtIdLegajo.value = legajoValidado;

 	while (isNaN(numeroLegajoIngresado) || numeroLegajoIngresado < 1000 || numeroLegajoIngresado > 9999) {
 	 	numeroLegajoIngresado = prompt("Por favor, ingrese su numero de legajo");
 		numeroLegajoIngresado = parseInt(numeroLegajoIngresado);
 		legajoValidado = numeroLegajoIngresado;
 		txtIdLegajo.value = legajoValidado;
 	} 

 	nacionalidadIngresada = prompt("Ingrese su nacionalidad, A para argentinos, E para extranjeros, N para nacionalizados");

 	while (nacionalidadIngresada != "A" && nacionalidadIngresada != "E" && nacionalidadIngresada != "N") {

 		switch (nacionalidadIngresada) {
 			case "A":
 				nacionalidadIngresada = "argentino";
 				break;
 			case "E":
 				nacionalidadIngresada = "extranjero";
 				break;
 			case "N":
 				nacionalidadIngresada = "nacionalizado";
 				break;
 		}
 	}

	nacionalidadValidada = nacionalidadIngresada;
	txtIdNacionalidad.value = nacionalidadValidada;
 		
}
