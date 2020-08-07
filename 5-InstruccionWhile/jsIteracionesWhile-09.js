/*CIRAOLO JULIETA
ejercicio 9 while

Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/

function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numeroIngresado;
	var numeroMaximo;
	var numeroMinimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero = true;
	respuesta = true;

	while (respuesta) {

		do {
			numeroIngresado = parseInt(prompt("Ingrese un numero."));
		} while(isNaN(numeroIngresado));

		if (banderaDelPrimero) { // bandera para ver cuando ingresa por primera vez
		banderaDelPrimero = false; // no entra mas a este if, va directo al else
		numeroMaximo = numeroIngresado;
		numeroMinimo = numeroIngresado;
		} else {
			if (numeroIngresado < numeroMinimo) {
				numeroMinimo = numeroIngresado;
			}
			if (numeroIngresado > numeroMaximo) {
				numeroMaximo = numeroIngresado;
			}
		}
		respuesta = confirm("Desea continuar?");
	}

	txtIdMaximo.value = numeroMaximo;
	txtIdMinimo.value = numeroMinimo;
}