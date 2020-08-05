/*CIRAOLO JULIETA 
Recuperatorio 2020 - Ejercicio 2
Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra de productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),
al terminar la compra el cliente accede a un descuento segun las bolsas en total
Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro*/

function mostrar()
{
	var respuesta;
	respuesta = true;
	var productoIngresado;
	var cantidadBolsas;
	var precioBolsas;
	var subTotal;

	do { // ingreso de productos por cliente

		//validar tipo producto
		productoIngresado = prompt("Ingrese el producto para la construccion que desea");
		while(!(productoIngresado == "arena" || productoIngresado == "cal" || productoIngresado == "cemento")) {
			productoIngresado = prompt("Por favor, ingrese el producto correcto")
		}

		//validando ingreso de numero y que sea > 0
		cantidadBolsas = prompt("Ingrese la cantidad de bolsas que desea");
		while(isNaN(cantidadBolsas) || cantidadBolsas <= 0) { 
			cantidadBolsas = prompt("Por favor, ingrese la cantidad correcta de bolsas que desea");
		}

		//validando ingreso de numero y que sea > 0
		precioBolsas = prompt("Ingrese el precio");
		while(isNaN(precioBolsas) || precioBolsas <= 0) { 
			precioBolsas = prompt("Por favor, ingrese la cantidad correcta de bolsas");
		}

		respuesta = confirm("Desea continuar?");

	} while (respuesta); // hasta que el cliente quiera

	//cuentas a mostrar
	subTotal = precioBolsas * cantidadBolsas;

	/*alert("a. El importe total a pagar , bruto sin descuento es " + importeTotal + y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
f) El tipo mas caro*/


}
