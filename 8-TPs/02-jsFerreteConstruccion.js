/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largoTerreno;
	var anchoTerreno;
	var perimetroTerreno;
	var cantidadDeAlambre;

	largoTerreno = txtIdLargo.value;
	anchoTerreno = txtIdAncho.value;

	largoTerreno = parseInt(largoTerreno);
	anchoTerreno = parseInt(anchoTerreno);

	// calcular perimetro: 2*(largo+ancho)
	perimetroTerreno = 2* (largoTerreno + anchoTerreno);
	cantidadDeAlambre = perimetroTerreno * 3;
	
	alert('La cantidad de alambre a comprar es: ' + cantidadDeAlambre + ' metros.');
}

function Circulo () 
{
	var radioTerreno;
	var perimetroTerreno;
	var cantidadDeAlambre;

	radioTerreno = txtIdRadio.value;
	radioTerreno = parseFloat(radioTerreno);

	perimetroTerreno = 2 * radioTerreno * Math.PI;
	perimetroTerreno = Math.ceil(perimetroTerreno)
	cantidadDeAlambre = perimetroTerreno * 3;
	
	alert('La cantidad de alambre a comprar es: ' + cantidadDeAlambre + ' metros.');
	
}

function Materiales () 
{
	var largoTerreno;
	var anchoTerreno;
	var bolsasCemento;
	var bolsasCal;
	var perimetroTerreno;
	var areaRectangulo;

	largoTerreno = txtIdLargo.value;
	anchoTerreno = txtIdAncho.value;

	largoTerreno = parseFloat(largoTerreno);
	anchoTerreno = parseFloat(anchoTerreno);

	perimetroTerreno = 2 * (largoTerreno + anchoTerreno);
	areaRectangulo = largoTerreno * anchoTerreno;

	bolsasCal = 3 * areaRectangulo;
	bolsasCemento = 2 * areaRectangulo;

	alert('Se necesitan ' + bolsasCal + ' bolsas de cal y ' + bolsasCemento + ' bolsas de cemento.');
}