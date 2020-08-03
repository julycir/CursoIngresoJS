/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	var claveIngresada;
	claveIngresada = prompt("ingrese el número clave.");

	var clave;
	clave = "utn750";

	while (claveIngresada != clave) {
		claveIngresada = prompt("error, ingrese el número clave.");
	}
}
