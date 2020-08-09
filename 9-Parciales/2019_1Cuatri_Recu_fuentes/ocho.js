/*CIRAOLO JULIETA
recuperatorio 2019 - ejercicio 7

Enunciado:
Bienvenidos.
Realizar el algoritmo que permita iterar el ingreso de dos datos de un vehiculo, un color (rojo verde o amarillo) y un valor entre 0 y 10000 hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de rojos
b) La cantidad de rojos con precio mayor a 5000
c) La cantidad de vehiculos con precio inferior a 5000
d) El promedio de todos los vehiculos ingresados.
e) El mas caro y su color*/

function mostrar()
{
	var colorVehiculo;
	var valorVehiculo;
	var respuesta;
	var cantidadAutosRojos;
	var cantidadRojosCincoMil;
	var cantidadMenorCincoMil;
	var cantidadVehiculos;
	var promedioVehiculos;
	var acumuladorValores;
	var colorCaro;
	var valorCaro;
	var banderaCaro;

	respuesta = true; // variable de control
	cantidadAutosRojos = 0;
	cantidadRojosCincoMil = 0;
	cantidadMenorCincoMil = 0;
	cantidadVehiculos = 0;
	acumuladorValores = 0;
	banderaCaro = true;


    while (respuesta) {

    	//pido color

    	colorVehiculo = prompt("Ingrese el color del vehiculo: rojo, verde o amarillo.");

    	// valido color correcto
    	while (colorVehiculo != "rojo" && colorVehiculo != "verde" && colorVehiculo != "amarillo"){
    		colorVehiculo = prompt("Por favor, ingrese un color correcto: rojo, verde o amarillo");
    	}

    	//pido valor

    	valorVehiculo = parseInt(prompt("Ingrese el valor del vehiculo."));

    	//valido valor

    	while (isNaN(valorVehiculo)) {
    		valorVehiculo = parseInt(prompt("Por favor, ingrese un valor numerico entre 0 y 10000."));
    	}

    	while (valorVehiculo < 0 || valorVehiculo > 10000) {
    		valorVehiculo = parseInt(prompt("Por favor, ingrese un valor numerico entre 0 y 10000."));
    	}

    	acumuladorValores += valorVehiculo;

    	//e) El mas caro y su color

    	if (banderaCaro) {
    		banderaCaro = false;
    		valorCaro = valorVehiculo;
    		colorCaro = colorVehiculo;
    	} else {
    		if (valorVehiculo > valorCaro) {
    			valorCaro = valorVehiculo;
    			colorCaro = colorVehiculo;
    		}
    	}

    	//a) La cantidad de rojos
    	if (colorVehiculo == "rojo") {
    		cantidadAutosRojos++;
    	} 

    	//b) La cantidad de rojos con precio mayor a 5000
    	if (colorVehiculo == "rojo" && valorVehiculo > 1000) {
    		cantidadRojosCincoMil++;
    	}

    	//c) La cantidad de vehiculos con precio inferior a 5000
    	if (valorVehiculo < 5000) {
    		cantidadMenorCincoMil++;
    	}

    	cantidadVehiculos++;
    	respuesta = confirm("Desea seguir ingresando vehiculos?"); // modificando variable de control
    }
    
    //d) El promedio de todos los vehiculos ingresados.

    promedioVehiculos = acumuladorValores / cantidadVehiculos;

	document.write("a) La cantidad de autos rojos es: " + cantidadAutosRojos + ".<br />b) La cantidad de autos rojos con precio mayor a 5000 es: " + cantidadRojosCincoMil + ".<br />c) La cantidad de vehiculos con precio inferior a 5000 es: " + cantidadMenorCincoMil + ".<br />d) El promedio del valor de todos los vehiculos ingresados es: " + promedioVehiculos + ".<br />e)El vehiculo mas caro es de color: " + colorCaro + " y valor: " + valorCaro + ".");
}
