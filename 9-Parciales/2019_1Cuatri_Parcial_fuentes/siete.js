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
	var banderaAltura;
	var alturaBaja;
	var sexoAlturaBaja;
	var mujeresAltisimas;

	cantidadJugadores = 0; 
	totalAlturas = 0;
	banderaAltura = true;
	mujeresAltisimas = 0;

	do { 
		do {
			altura = parseInt(prompt("Ingrese la altura en centimetros."));
			totalAlturas += altura;
		} while (isNaN(altura) || altura < 0 || altura > 250); //valido q sea numero y entre 0 y 250

		do {
			sexo = prompt("Ingrese su sexo.");
		} while (sexo != "f" && sexo != "m"); //valido sexo f o m

		//b) La altura más baja y el sexo de esa persona.
		if (banderaAltura) {
			banderaAltura = false;
			alturaBaja = altura;
			sexoAlturaBaja = sexo;
		} else {
			if (altura < alturaBaja) {
				alturaBaja = altura;
				sexoAlturaBaja = sexo;
			}
		}

		//c) La cantidad de muheres que su altura supere los 190 centimetros.*/
		if (sexo == "f" && altura > 189) {
			mujeresAltisimas++;
		}

		cantidadJugadores++; // modifico variable de control

	} while (cantidadJugadores < 5);

	//a) El promedio de las alturas totales.
	promedioAlturas = totalAlturas / cantidadJugadores;

	alert("a) El promedio de las alturas totales es: " + promedioAlturas + ". b) La altura más baja es: " + alturaBaja + " y el sexo de esa persona es: " + sexoAlturaBaja + ". c) La cantidad de mujeres que su altura supera los 190 centimetros es: " + mujeresAltisimas + ".");
}

