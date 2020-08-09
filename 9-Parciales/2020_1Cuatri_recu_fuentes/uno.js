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
	var productosIngresados;

	var tipoProducto;
	var precioProducto;
	var cantidadProducto;
	var marcaProducto;
	var fabricanteProducto;
	
	var precioJabonesCaros;
	var cantidadJabonesCaros;
	var fabricanteJabonesCaros;
	var banderaJabonesCaros;

	var productoMasComprado;
	var acumuladoMasComprado;
	var cantidadMasComprado;
	var montoMasComprado;
	var promedioMasComprado;
	var banderaMasComprado;

	var cantidadBarbijos;

	cantidadProducto = 0;
	productosIngresados = 0;

	banderaJabonesCaros = true;
	banderaMasComprado = true;
	acumuladoMasComprado = 0;

	cantidadBarbijos = 0;

	do {
		//1. VALIDANDO TIPO DE PRODUCTO
		do { 
			tipoProducto = prompt("Que tipo de producto es: barbijo, jabon o alcohol?");

			while (tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol") {
				tipoProducto = prompt("Error, que tipo de producto es: barbijo, jabon o alcohol?");
			}
		} while (tipoProducto != "barbijo" && tipoProducto != "jabon" && tipoProducto != "alcohol");

		//2. VALIDANDO PRECIO
		do { 
			precioProducto = prompt("Ingrese el precio del producto");

			while (isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300) {
				precioProducto = prompt("Por favor, ingrese un monto valido entre 100 y 300.");
			}
		} while (isNaN(precioProducto) || precioProducto < 100 || precioProducto > 300);
		
		//3. VALIDANDO CANTIDAD
		do { 
			cantidadProducto = parseInt(prompt("Cuantos desea agregar?"));	

			while (cantidadProducto < 0 || cantidadProducto > 1000) {
				cantidadProducto = prompt("Esa cantidad es incorrecta. De 1 a 999, cuantos desea agregar?");
			}

			while (isNaN(cantidadProducto)) {
				cantidadProducto = prompt("Por favor, ingrese un numero, cuantos desea agregar?");
			}

			if (tipoProducto == "barbijo") {
				cantidadBarbijos++;
			}

		} while (isNaN(cantidadProducto) || cantidadProducto < 0 || cantidadProducto > 1000);

		//4. ingresa marca

		do {
			marcaProducto = prompt("Ingrese la marca del producto");

		} while (!(isNaN(marcaProducto)));

		//5. ingresa fabricante

		do {
			fabricanteProducto = prompt("Ingrese el fabricante del producto");
		} while (!(isNaN(fabricanteProducto))); 

		//a) Del más caro de los jabones, la cantidad de unidades y el fabricante

		if (banderaJabonesCaros && tipoProducto == "jabon") {
			banderaJabonesCaros = false;
			precioJabonesCaros = precioProducto;
			cantidadJabonesCaros = cantidadProducto;
			fabricanteJabonesCaros = fabricanteProducto;
		} else {
			if (tipoProducto == "jabon" && precioProducto > precioJabonesCaros) {	
				precioJabonesCaros = precioProducto;
				cantidadJabonesCaros = cantidadProducto;
				fabricanteJabonesCaros = fabricanteProducto;
			}
		}

		//b) Del tipo de producto con más unidades en total de la compra, el promedio por compra

		if (banderaMasComprado) {
			banderaMasComprado = false;
			productoMasComprado = tipoProducto;
			cantidadMasComprado = cantidadProducto;
			montoMasComprado = precioProducto * cantidadProducto;
			acumuladoMasComprado += montoMasComprado;
		} else {
			if (cantidadProducto > cantidadMasComprado) {
				productoMasComprado = tipoProducto;
				cantidadMasComprado = cantidadProducto;
				montoMasComprado = precioProducto * cantidadProducto;
				acumuladoMasComprado += montoMasComprado;
			}
		}

		productosIngresados++; // modifico variable de control

	} while (productosIngresados < 2); // solo permite el ingreso de 5 productos

	promedioMasComprado = acumuladoMasComprado / cantidadMasComprado;
	promedioMasComprado.toFixed(0);

	document.write("Del más caro de los jabones, se compraron " + cantidadJabonesCaros + " cantidad de unidades y el fabricante fue " + fabricanteJabonesCaros + ", el producto más comprado fue "+ productoMasComprado + " y el promedio por compra fue: " + promedioMasComprado + ". Se compraron " + cantidadBarbijos + " cantidad de barbijos en total.");
}