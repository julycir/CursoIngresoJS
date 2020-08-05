/*CIRAOLO JULIETA 
parcial 2019 ejercicio 3

Enunciado:

Bienvenidos.
Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.*/

function mostrar()
{
	var precio;
	var porcentajeDescuento;
	var precioFinal;

	precio = parseInt(prompt("Ingrese el precio"));
	while(isNaN(precio) || precio < 0) {
		precio = parseInt(prompt("Por favor, ingrese un precio valido"));
	}

	porcentajeDescuento = parseInt(prompt("Ingrese el porcentaje de descuento"));
	while(isNaN(porcentajeDescuento) || porcentajeDescuento < 0) {
		porcentajeDescuento = parseInt(prompt("Por favor, ingrese un porcentaje valido"));
	}

	precioFinal = precio - (precio * porcentajeDescuento / 100);
	elPrecioFinal.value = precioFinal;
}
