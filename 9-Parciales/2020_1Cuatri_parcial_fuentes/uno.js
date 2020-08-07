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
	var cantidadProductoIndividual;
	var cantidadProductos;
	var cantidadBarbijos;
	var cantidadJabones;
	var cantidadAlcohol;
	var precioProducto;
	var precioBarbijo;
	var precioJabon;
	var precioAlcohol;
	var marcaProducto;
	var fabricanteProducto;
	var productoMasComprado;


	cantidadProductoIndividual = 0;
	cantidadProductos = 0;
	cantidadBarbijos = 0;
	cantidadJabones = 0;
	cantidadAlcohol = 0;


	do {//pidiendo un producto
		do { //1. VALIDANDO TIPO DE PRODUCTO
			tipoProducto = prompt("Que tipo de producto desea: barbijo, jabon o alcohol?");

			if (tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol") {
				tipoProducto = prompt("Error, que tipo de producto es: barbijo, jabon o alcohol?");
			}

		} while (tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol");

		do { //2. VALIDANDO PRECIO
			precioProducto = parseInt(prompt("Ingrese el precio del producto (entre 100 y 300)"));

			if (precioProducto < 100 || precioProducto > 300) {
				precioProducto = prompt("Por favor, ingrese un precio valido entre 100 y 300");
			}
	
		} while (isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300);

		do { //3. VALIDANDO CANTIDAD

			cantidadProductoIndividual = parseInt(prompt("Cuantos desea agregar?"));	

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

			if (cantidadProductoIndividual < 0 || cantidadProductoIndividual > 1000) {
				cantidadProductoIndividual = prompt("Esa cantidad es incorrecta. De 1 a 999, cuantos desea agregar?");
			}

			if (isNaN(cantidadProductoIndividual)) {
				cantidadProductoIndividual = prompt("Por favor, ingrese un numero, cuantos desea agregar?");
			}


		} while (isNaN(cantidadProductoIndividual) || cantidadProductoIndividual < 0 || cantidadProductoIndividual > 1000);

		do { //4. ingresa marca
			marcaProducto = prompt("Ingrese la marca del producto");

			if (!(isNaN(marcaProducto))) {
				marcaProducto = prompt("Por favor, ingrese la marca del producto");
			}

		} while (!(isNaN(marcaProducto)));

		do { //5. ingresa fabricante
			fabricanteProducto = prompt("Ingrese el fabricante del producto");

			if (!(isNaN(fabricanteProducto))) {
				fabricanteProducto = prompt("Ingrese el fabricante del producto");
			}

		} while (!(isNaN(fabricanteProducto))); 

		cantidadProductos++;	


	} while (cantidadProductos < 5);

	//a) Del más barato de los alcohol, la cantidad de unidades y el fabricante


	//b) Del tipo con mas unidades, el promedio por compra
	if (cantidadJabones > cantidadAlcohol && cantidadJabones > cantidadBarbijos) {
		productoMasComprado = "jabon";
		if (cantidadAlcohol > cantidadJabones && cantidadAlcohol > cantidadBarbijos) {
			productoMasComprado = "alcohol";
		} if (cantidadBarbijos > cantidadJabones && cantidadBarbijos > cantidadAlcohol) {
			productoMasComprado = "barbijos";
		}
	}

	//c) Cuántas unidades de jabones hay en total*/
	
/*
	document.write("Del más barato de los alcoholes, se compraron " + cantidadAlcoholes + " cantidad de unidades y el fabricante fue " + fabricanteProducto + ", el producto más comprado según cantidad de unidades fue " + " y el promedio por compra fue: " + ". Se compraron " + cantidadJabones + " jabones en total.");*/	
}


