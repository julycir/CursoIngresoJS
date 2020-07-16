/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var primerPrecio;
	var segundoPrecio;
	var TercerPrecio;
	var suma;

	primerPrecio = parseInt(txtIdPrecioUno.value);
	segundoPrecio = parseInt(txtIdPrecioDos.value);
	tercerPrecio = parseInt(txtIdPrecioTres.value);

	suma = primerPrecio + segundoPrecio + tercerPrecio;
	alert('El resultado de la suma es: ' + suma);
}
function Promedio () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var promedioPrecios;

	primerPrecio = parseInt(txtIdPrecioUno.value);
	segundoPrecio = parseInt(txtIdPrecioDos.value);
	tercerPrecio = parseInt(txtIdPrecioTres.value);

	promedioPrecios = (primerPrecio + segundoPrecio + tercerPrecio) / 3;
	alert('El promedio de los 3 precios es: ' + promedioPrecios);
}

function PrecioFinal () 
{
	var primerPrecio;
	var segundoPrecio;
	var tercerPrecio;
	var ultimoPrecio;

	primerPrecio = parseInt(txtIdPrecioUno.value);
	segundoPrecio = parseInt(txtIdPrecioDos.value);
	tercerPrecio = parseInt(txtIdPrecioTres.value);

	suma = primerPrecio + segundoPrecio + tercerPrecio;
	ultimoPrecio = suma * 1.21;
	alert('El precio final es: ' + ultimoPrecio);
}