/*CIRAOLO Julieta
Parcial 2018 - Ejercicio 1
Enunciado:
Bienvenidos.
Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.*/

function mostrar()
{
	var ancho;
	var largo;
	var perimetro;

	ancho = parseInt(prompt("Ingrese el ancho del rectangulo"));
	largo = parseInt(prompt("Ingrese el largo del rectangulo"));

	perimetro = ancho + ancho + largo + largo;
}
