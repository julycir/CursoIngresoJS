/*CIRAOLO JULIETA 
Enunciado:
una agencia de viajes debe sacar las tarifas de los viajes , se cobra $15.000 por cada estadia como base, se pide el ingreso de una estacion del año y localidad para vacacionar para poder calcular el precio final

en Invierno: bariloche tiene un aumento del 20% cataratas y Cordoba tiene un descuento del 10% Mar del plata tiene un descuento del 20%

en Verano: bariloche tiene un descuento del 20% cataratas y Cordoba tiene un aumento del 10% Mar del plata tiene un aumento del 20%

en Otoño y Primavera: bariloche tiene un aumento del 10% cataratas tiene un aumento del 10% Mar del plata tiene un aumento del 10% y Cordoba tiene el precio sin descuento
Curso de ingreso UTN FRA*/

function mostrar() {
	var estacionIngresada = txtIdEstacion.value;
	var destinoIngresado = txtIdDestino.value;
	var estadiaBase = 15000;
	var estadiaTotal;

	switch (estacionIngresada) {
		case "Invierno":
			switch (destinoIngresado) {
				case "Bariloche":
					estadiaTotal = estadiaBase * 1.20;
					break;
				case "Cordoba":
				case "Cataratas":
					estadiaTotal = estadiaBase * 0.90;
					break;
				case "Mar del plata":
					estadiaTotal = estadiaBase * 0.80;
					break;
			}
			break;
		case "Verano":
			switch (destinoIngresado) {
				case "Bariloche":
					estadiaTotal = estadiaBase * 0.80;
					break;
				case "Cordoba":
				case "Cataratas":
					estadiaTotal = estadiaBase * 1.10;
					break;
				case "Mar del plata":
					estadiaTotal = estadiaBase * 1.20;
					break;
			}
			break;
		case "Primavera":
		case "Otoño":
			switch (destinoIngresado) {
				case "Bariloche":
				case "Cataratas":
				case "Mar del plata":
					estadiaTotal = estadiaBase * 1.10;
					break;
				case "Cordoba":
					estadiaTotal = estadiaBase;
					break;
			}
			break;
	console.log(estadiaTotal);
	}
}

