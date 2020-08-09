/*CIRAOLO JULIETA
parcial 2020 ejercicio 1
Enunciado:

Debemos realizar la carga de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más barato de los alcohol, la cantidad de unidades y el fabricante
b) Del tipo con mas unidades, el promedio por compra
c) Cuántas unidades de jabones hay en total*/

function mostrar()
{
	var tipoProducto;
	var precioProducto;
	var cantidadProducto;
	var marcaProducto;
	var fabricanteProducto;

	var banderaAlcoholMasBarato;
	var precioAlcoholMasBarato;
	var cantidadAlcoholMasBarato;
	var fabricanteAlcoholMasBarato;

	var productoMasComprado;
	var cantidadProductoMasComprado;
	var acumuladoProductoMasComprado;
	var promedioProductoMasComprado;

	var cantidadBarbijos;
	var cantidadAlcohol;
	var cantidadJabones;

	cantidadProducto = 0;
	banderaAlcoholMasBarato = true;
	cantidadProductoMasComprado = 0;
	acumuladoProductoMasComprado = 0;
	cantidadBarbijos = 0;
	cantidadAlcohol = 0;
	cantidadJabones = 0;

	do {//pidiendo un producto
		do { //1. VALIDANDO TIPO DE PRODUCTO
			tipoProducto = prompt("Que tipo de producto desea: barbijo, jabon o alcohol?");
			while (tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol") {
				tipoProducto = prompt("Error, que tipo de producto desea: barbijo, jabon o alcohol?");
			}
		} while (tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol");

		do { //2. VALIDANDO PRECIO
			precioProducto = parseInt(prompt("Ingrese el precio del producto (entre 100 y 300)"));
			while (isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300) {
				precioProducto = parseInt(prompt("Por favor, ingrese un precio valido entre 100 y 300"));
			}
		} while (isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300);

		do { //3. VALIDANDO CANTIDAD
			cantidadProducto = parseInt(prompt("Cuantos desea agregar?"));	
			while (isNaN(cantidadProductoIndividual) || cantidadProductoIndividual < 0 || cantidadProductoIndividual > 1000) {
				cantidadProductoIndividual = parseInt(prompt("Por favor, ingrese una cantidad correcta de 1 a 999, cuantos desea agregar?"));
			}
		} while (isNaN(cantidadProductoIndividual) || cantidadProductoIndividual < 0 || cantidadProductoIndividual > 1000);

		do { //4. ingresa marca
			marcaProducto = prompt("Ingrese la marca del producto");
			while (!(isNaN(marcaProducto))) {
				marcaProducto = prompt("Por favor, ingrese la marca del producto");
			}
		} while (!(isNaN(marcaProducto)));

		do { //5. ingresa fabricante
			fabricanteProducto = prompt("Ingrese el fabricante del producto");
			while (!(isNaN(fabricanteProducto))) {
				fabricanteProducto = prompt("Por favor, ingrese el fabricante del producto");
			}
		} while (!(isNaN(fabricanteProducto))); 

		switch (tipoProducto) {
			case "barbijo":
				cantidadBarbijos++;
				break;
			case "jabon":
				cantidadJabones++;
				break;
			case "alcohol":
				cantidadAlcohol++;
				break;
		}

		cantidadProducto++;	//modifico variable de control
	} while (cantidadProducto < 5); 

	//a) Del más barato de los alcoholes, la cantidad de unidades y el fabricante
	if (tipoProducto == "alcohol") {
		if (banderaAlcoholMasBarato) {
			banderaAlcoholMasBarato = false;
			precioAlcoholMasBarato = precioProducto;
			cantidadAlcoholMasBarato = cantidadProducto;
			fabricanteAlcoholMasBarato = fabricanteProducto;
		} else {
			if (precioProducto < precioAlcoholMasBarato) {
				precioAlcoholMasBarato = precioProducto;
				cantidadAlcoholMasBarato = cantidadProducto;
				fabricanteAlcoholMasBarato = fabricanteProducto;
			}
		}
	}

	//b) Del tipo con mas unidades, el promedio por compra ************
	if (cantidadJabones > cantidadAlcohol && cantidadJabones > cantidadBarbijos) {
		productoMasComprado = "jabon";
	} else if (cantidadAlcohol > cantidadJabones && cantidadAlcohol > cantidadBarbijos) {
		productoMasComprado = "alcohol";
	} else {
		productoMasComprado = "barbijos";
	}

	productoMasComprado 


	promedioCompra = acumuladoProductoMasComprado / cantidadProductoMasComprado;

	//c) Cuántas unidades de jabones hay en total*/

	document.write("Del más barato de los alcoholes, se compraron " + cantidadAlcoholMasBarato + " cantidad de unidades y el fabricante fue " + fabricanteAlcoholMasBarato + ", el producto más comprado según cantidad de unidades fue " + productoMasComprado + " y el promedio por compra fue: " + promedioCompra + ". Se compraron " + cantidadJabones + " jabones en total.");

}


	

	