/*CIRAOLO JULIETA
recuperatorio 2019 - ejercicio 5
Enunciado:
Bienvenidos (SOLO SWITCH).
Una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 15% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África u Oceania tiene un 30% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%
en cualquier continenete , si paga con cheque, se recarga un 15% de impuesto al cheque*/

function mostrar()
{
	var continente;
	var medioDePago;
	var cantidadDias;
	var precioDiario;
	var descuento;
	var subTotal;
	var total;

	continente = selecContinente.value;
	medioDePago = selecPago.value;
	precioDiario = 100;


	cantidadDias = parseInt(prompt("Cuantos dias desea viajar?"));

	switch (continente) {
		case "America":
			descuento = 0.15;
			break;
			case "Débito":
				descuento = 0.25;
				break;
		case "África":
		case "Oceania":
			descuento = 0.30;
			break;
			case "Débito":
			case "MercadoPago":
				descuento = 0.45;
				break;
		case "Europa":
			descuento = 0.20;
			break;
			case "Débito":
				descuento = 0.35;
				break;
			case "MercadoPago":
				descuento = 0.30;
				break;
			default:
				descuento = 0.25;
				break;
		case "Africa":
		case "Asia":
			descuento = 1.20;
			break;
				case "cheque":
				descuento = 1.35;
	}

	subTotal = precioDiario * cantidadDias;
	total = subTotal - (subTotal * descuento);

	alert("El precio total es " + total + ".");
}
