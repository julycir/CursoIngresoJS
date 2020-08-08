/*CIRAOLO Julieta
Parcial 2018 - Ejercicio 8

Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar la marca del producto, el peso el cual debe ser entre 1 y 100 (validar),
la temperatura de almacenamiento(entre -30 y 30) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) La marca del producto más pesado
c) La cantidad de productos que se conservan a menos de 0 grados.
d) El promedio del peso de todos los productos.
f) El peso máximo y el mínimo.

Testeo con los siguientes valores
(m=pepito;p = 50; t =-300(mal) ,-30(bien) )
(m=teem;p = 10; t =0 )
(m=llut;p = 150(mal), 15(bien); t =-13 )
(m=fpy;p = 45; t =-12 )*/

function mostrar()
{
	var marcaProducto;
	var pesoProducto;
	var temperaturaAlmacenamiento;
	var cantidadTemperaturasPares;
	var marcaProductoMasPesado;
	var cantidadProductosCeroGrados;
	var acumuladorPesos;
	var promedioPesoProductos;
	var pesoMaximo;
	var pesoMinimo;
	var cantidadProductos;
	var respuesta;

	acumuladorPesos = 0;
	cantidadProductosCeroGrados = 0;
	cantidadProductos = 0;
	respuesta = true;

	do { 
		do {
			marcaProducto = prompt("Ingrese la marca del producto");
		} while ((!(isNaN(marcaProducto))));

		do {
			pesoProducto = parseInt(prompt("Ingrese el peso del producto"));

			while (isNaN(pesoProducto) || pesoProducto < 1 || pesoProducto > 100) {
				pesoProducto = parseInt(prompt("Por favor, ingrese un peso valido"));
			}

			acumuladorPesos += pesoProducto;

		if (pesoMaximo == undefined) {
			pesoMaximo = pesoProducto;
			pesoMinimo = pesoProducto;
		} else {
			if (pesoProducto > pesoMaximo) {
				pesoMaximo = pesoProducto;
				marcaProductoMasPesado = marcaProducto; // b) La marca del producto más pesado
			}
			if (pesoProducto < pesoMinimo) {
				pesoMinimo = pesoProducto;
			}
		}

		} while (isNaN(pesoProducto) || pesoProducto < 1 || pesoProducto > 100);

		do {
			temperaturaAlmacenamiento = parseInt(prompt("Ingrese la temperatura de almacenamiento"));

			while (temperaturaAlmacenamiento < -30 || temperaturaAlmacenamiento > 30) {
				temperaturaAlmacenamiento = parseInt(prompt("Ingrese la temperatura de almacenamiento"));
			}

			if (temperaturaAlmacenamiento % 2 == 0) {
				cantidadTemperaturasPares++;
			} //a) La cantidad de temperaturas pares.

			if (temperaturaAlmacenamiento < 0) {
				cantidadProductosCeroGrados++;
			} //c) La cantidad de productos que se conservan a menos de 0 grados.
		} while (temperaturaAlmacenamiento < -30 || temperaturaAlmacenamiento > 30);

		cantidadProductos++;

		respuesta = confirm("Desea ingresar mas productos?");

	} while (respuesta); //hasta que el usuario quiera

	promedioPesoProductos = acumuladorPesos / cantidadProductos; //d) El promedio del peso de todos los productos.

	document.write("a) La cantidad de temperaturas pares es " + cantidadTemperaturasPares + ".<br />b) La marca del producto más pesado es " + marcaProductoMasPesado + ".<br />c) La cantidad de productos que se conservan a menos de 0 grados es " + cantidadProductosCeroGrados + ".<br />d) El promedio del peso de todos los productos es " + promedioPesoProductos + ".<br />f) El peso máximo es " + pesoMaximo + " y el mínimo es " + pesoMinimo + ".");
}
