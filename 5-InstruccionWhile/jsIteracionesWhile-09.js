/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numero;
	var maximo;
	var minimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta = true;

	while(respuesta)
	{
		
		respuesta=prompt("Desea continuar?");
	}

		var contador;
	var respuesta;
	var sumaPositivos;
	var multiplicacionNegativos;

	contador = 0;
	sumaPositivos = 0;
	multiplicacionNegativos = 1;
	respuesta = 'si';

	numeroIngresado = prompt("Ingrese un numero.");
	numeroIngresado = parseInt(numeroIngresado); 
	respuesta = prompt("Desea continuar?");

	while (respuesta === "si") { 

		numeroIngresado = prompt("Ingrese un numero.");
		numeroIngresado = parseInt(numeroIngresado); 

		while(isNaN(numeroIngresado)) {
			numeroIngresado = prompt("Error, por favor ingrese un numero.");
			numeroIngresado = parseInt(numeroIngresado);
		}

		if (numeroIngresado >= 0) {
			sumaPositivos = sumaPositivos + numeroIngresado;
		} else { 
			multiplicacionNegativos = multiplicacionNegativos * numeroIngresado;
		}
		
		respuesta = prompt("Desea continuar?");
	}


	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;

}