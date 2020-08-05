/*CIRAOLO JULIETA
Recuperatorio 2020 - ejercicio 1
Enunciado:

Debemos realizar la carga de una compra de 5(cinco) productos de prevención de contagio,
de cada una debo obtener los siguientes datos:
el tipo de producto (validar "barbijo" , "jabón" o "alcohol") ,
el precio (validar entre 100 y 300),
la cantidad de unidades (no puede ser 0 o negativo y no debe superar las 1000 unidades),
la Marca y el fabricante.
Se debe Informar al usuario lo siguiente:
a) Del más caro de los jabones, la cantidad de unidades y el fabricante
b) Del tipo de producto con más unidades en total de la compra, el promedio por compra
c) Cuántas unidades de Barbijos se compraron en total*/

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

	cantidadProductoIndividual = 0;
	cantidadProductos = 0;
	cantidadBarbijos = 0;
	cantidadJabones = 0;
	cantidadAlcohol = 0;

	do {
		//1. VALIDANDO TIPO DE PRODUCTO
		do { 
			tipoProducto = prompt("Que tipo de producto es: barbijo, jabon o alcohol?");

			if (!(tipoProducto === "barbijo" || tipoProducto === "jabon" || tipoProducto === "alcohol")) {
				tipoProducto = prompt("Error, que tipo de producto es: barbijo, jabon o alcohol?");
			}

		} while (!(tipoProducto === "barbijo" || tipoProducto === "jabon" || tipoProducto === "alcohol"));

		//2. VALIDANDO PRECIO
		do { 
			precioProducto = prompt("Ingrese el precio del producto");

			if (!(precioProducto > 100 && precioProducto < 300)) {
				precioProducto = prompt("Por favor, ingrese un monto valido");
			}
	
		} while (!(precioProducto > 100 && precioProducto < 300));
		
		//3. VALIDANDO CANTIDAD
		do { 

			cantidadProductoIndividual = prompt("Cuantos desea agregar?");	

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

			if (!(cantidadProductoIndividual > 0 && cantidadProductoIndividual < 1000)) {
				cantidadProductoIndividual = prompt("Esa cantidad es incorrecta. De 1 a 999, cuantos desea agregar?");
			}

			if (isNaN(cantidadProductoIndividual)) {
				cantidadProductoIndividual = prompt("Por favor, ingrese un numero, cuantos desea agregar?");
			}

			cantidadProductos++;
			break;

		} while (isNaN(cantidadProductoIndividual) || !(cantidadProductoIndividual > 0 && cantidadProductoIndividual < 1000));

		//4. ingresa marca

		do {
			marcaProducto = prompt("Ingrese la marca del producto");

		} while (!(isNaN(marcaProducto)));

		//5. ingresa fabricante

		do {
			fabricanteProducto = prompt("Ingrese el fabricante del producto");
		} while (!(isNaN(fabricanteProducto))); 

	} while (cantidadProductos<5);

	document.write("Del más caro de los jabones, se compraron " + cantidadJabones " cantidad de unidades y el fabricante fue " + ", el producto más comprado fue " + " y el promedio por compra fue: " + ". Se compraron " + cantidadBarbijos + " cantidad de barbijos en total.");
}
