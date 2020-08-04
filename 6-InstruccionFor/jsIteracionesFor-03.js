/*CIRAOLO JULIETA
EJERCICIO 3
al presionar el botón pedir la cantidad de veces que quiero repetir el mensaje "Hola UTN FRA"*/

function mostrar()
{

	var repeticiones = prompt("ingrese el número de repeticiones");
	repeticiones = parseInt(repeticiones);

	while(isNaN(repeticiones)) {
		var repeticiones = prompt("error, por favor ingrese el número de repeticiones");
		repeticiones = parseInt(repeticiones);
	}

	var mensaje;
	mensaje = "Hola UTN FRA";

	for (let i = 0; i < repeticiones; i++) {
		alert(mensaje);
	}
}

//falta validar repeticiones, que sea un numero y que sea mayor a 0