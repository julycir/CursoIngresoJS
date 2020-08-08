/*CIRAOLO Julieta
Parcial 2018 - Ejercicio 3
Enunciado:
Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/

function mostrar()
{
	var precio;
	var porcentajeDescuento;
	var descuento;
	var precioFinal;

	precio = parseInt(prompt("Ingrese el precio"));
	porcentajeDescuento = parseInt(prompt("Ingrese el porcentaje de descuento"));

	descuento = porcentajeDescuento / 100;

	precioFinal = precio - (precio * descuento);
	elPrecioFinal.value = precioFinal;
}
