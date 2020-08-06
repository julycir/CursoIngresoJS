/*CIRAOLO JULIETA
parcial 2020 ejercicio 2

Enunciado:

Realizar el algoritmo que permita ingresar los datos de una compra productos de la construccion, hasta que el cliente quiera:
Tipo validad("arena";"cal";"cemento")
Cantidad de bolsas,
Precio por bolsa (más de cero ),

Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
a) El importe total a pagar , bruto sin descuento y...
b) el importe total a pagar con descuento(solo si corresponde)
d) Informar el tipo con mas cantidad de bolsas.
f) El tipo mas caro*/

function mostrar()
{
	var respuesta;
	respuesta = true;
	var productoIngresado;
	var cantidadBolsas;
	var precioBolsas;
	var subTotal;
	var importeTotal;
	cantidadBolsas = 0;
	subTotal = 0;
	importeTotal = 0;

	do { // ingreso de productos por cliente

		//validar tipo producto
		productoIngresado = prompt("Ingrese el producto para la construccion que desea");
		while(productoIngresado == "arena" && productoIngresado == "cal" && productoIngresado == "cemento") {
			productoIngresado = prompt("Por favor, ingrese el producto correcto");
		}

		//validando ingreso de numero y que sea > 0
		cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas que desea"));
		while(isNaN(cantidadBolsas) || cantidadBolsas < 0) { 
			cantidadBolsas = parseInt(prompt("Por favor, ingrese la cantidad correcta de bolsas que desea"));
		}

		//validando ingreso de numero y que sea > 0
		precioBolsas = parseInt(prompt("Ingrese el precio"));
		while(isNaN(precioBolsas) || precioBolsas <= 0) { 
			precioBolsas = prompt("Por favor, ingrese un precio valido");
		}

		respuesta = confirm("Desea continuar?");

	} while (respuesta); // hasta que el cliente quiera

	//cuentas a mostrar
	subTotal = precioBolsas * cantidadBolsas;

	//Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
	if (cantidadBolsas > 10) {
		subTotal = subTotal * 0.85;
	}

	//Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.
	if (cantidadBolsas > 30) {
		subTotal = subTotal * 0.75;
	}

	importeTotal = subTotal;

	alert("El importe total a pagar, bruto sin descuento es " + subTotal + " y el importe total a pagar con descuento (solo si correspondiera descuento por cantidad) es " + importeTotal + ". El tipo de material mas comprado fue .... y el tipo de material mas comprado fue...")
}
