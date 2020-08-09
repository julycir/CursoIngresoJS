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
	var productoIngresado;
	var cantidadBolsas;
	var precioBolsas;
	var descuento;
	var importeBruto;
	var importeConDescuento;
	var cantidadArena;
	var cantidadCal;
	var cantidadCemento;
	var productoMasComprado;
	var banderaMasCaro;
	var productoMasCaro;
	var precioMasCaro;

	respuesta = true;
	cantidadArena = 0;
	cantidadCal = 0;
	cantidadCemento = 0;
	banderaMasCaro = true;

	do { // ingreso de productos por cliente

		//validar tipo producto
		productoIngresado = prompt("Ingrese el producto para la construccion que desea");
		while(productoIngresado != "arena" && productoIngresado != "cal" && productoIngresado != "cemento") {
			productoIngresado = prompt("Por favor, ingrese el producto correcto")
		}

		//validando ingreso de numero y que sea > 0
		cantidadBolsas = parseInt(prompt("Ingrese la cantidad de bolsas que desea"));
		while(isNaN(cantidadBolsas) || cantidadBolsas < 0) { 
			cantidadBolsas = parseInt(prompt("Por favor, ingrese la cantidad correcta de bolsas que desea"));
		}

		//validando ingreso de numero y que sea > 0
		precioBolsas = parseInt(prompt("Ingrese el precio de las bolsas"));
		while(isNaN(precioBolsas) || precioBolsas < 0) { 
			precioBolsas = parseInt(prompt("Por favor, ingrese la cantidad correcta de bolsas"));
		}

		switch (productoIngresado) {
			case "arena":
				cantidadArena++;
				break;
			case "cal":
				cantidadCal++;
				break;
			case "cemento":
				cantidadCemento++;
				break;
		}

		respuesta = confirm("Desea continuar?"); //modifico variable de control

	} while (respuesta); // hasta que el cliente quiera

	//al terminar la compra el cliente accede a un descuento segun las bolsas en total
	//Si compro más de 10 bolsas en total tenes 15% de descuento sobre el total a pagar.
	//Si compro más de 30 bolsas en total tenes 25% de descuento sobre el total a pagar.

	if (cantidadBolsas > 30) {
		descuento = 25;
	} else if (cantidadBolsas > 10) {
		descuento = 15;
	} else {
		descuento = 0;
	}
	descuento = importeBruto * descuento / 100;
	importeBruto = precioBolsas * cantidadBolsas;
	importeTotal = importeBruto - descuento;

	//d) Informar el tipo ("arena";"cal";"cemento") con mas cantidad de bolsas en el total de la compra.
	if (cantidadArena > cantidadCal && cantidadArena > cantidadCemento) {
		productoMasComprado = "arena";
	} else if (cantidadCal > cantidadArena && cantidadCal > cantidadCemento) {
		productoMasComprado = "cal";
	} else {
		productoMasComprado = "cemento";
	}
	
	//f) El tipo mas caro
	if (banderaMasCaro) {
		banderaMasCaro = false;
		productoMasCaro = productoIngresado;
		precioMasCaro = precioBolsas;
	} else {
		if (precioBolsas > precioMasCaro) {
			productoMasCaro = productoIngresado;
			precioMasCaro = precioBolsas;
		}
	}

	document.write("a. El importe total a pagar, bruto sin descuento es " + importeBruto + " y b) el importe total a pagar con descuento (solo si corresponde) es: " + importeTotal + ".<br />d)El tipo con mas cantidad de bolsas en el total de la compra es: " + productoMasComprado + ".<br />f) El tipo mas caro es: " + productoMasCaro + ".")

}
