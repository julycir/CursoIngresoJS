/*CIRAOLO JULIETA 
parcial 2019 ejercicio 1
Realizar el algoritmo que pida los datos necesarios para un triángulo equilátero por prompt y que muestre el perímetro por alert.
*/

function mostrar()
{
	var medidaLado;
	var perimetro;

	medidaLado = parseInt(prompt("Cuanto mide cada lado del triangulo?"));
	perimetro = medidaLado * 3;
	alert("El perimetro del triangulo equilatero es: " + perimetro);
}
