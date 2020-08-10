/*CIRAOLO JULIETA 
parcial 2019 ejercicio 5

Enunciado:
Bienvenidos (SOLO WITCH).
una empresa de viajes le solicita ingresar que continente le gustaria visitar
y la cantidad de días , la oferta dice que por día se cobra $100 , que se puede pagar de todas las maneras
Si es América tiene un 50% de descuento y si ademas paga por débito se le agrega un 10% mas de descuento
Si es África tiene un 60% de descuento y si además paga por mercadoPago o efectivo se le agrega un 15% mas de descuento
Si es Europa tiene un 20% de descuento y si ademas paga por débito se le agrega un 15% , por mercadoPago un 10% y cualquier otro medio 5%
cualquier otro continente tiene un recargo del 20%


FALTAN MEDIOS DE PAGOOOOOOOOOOOOOOOOOOOOO y corregir switch*/

function mostrar()
{
	var continente;
	var cantidadDias;
	var precioPorDia;
	var precioTotal;
	precioPorDia = 100;

	continente = Marca.value;
	cantidadDias = parseInt(prompt("Cuantos dias va a durar su viaje?"));
	precioTotal = precioPorDia * cantidadDias;
	
	switch (continente) {
		case "America":
			precioTotal = precioTotal * 0.50;
			break;
			case "debito":
				precioTotal = precioTotal * 0.40;
				break;
		case "Africa":
			precioTotal = precioTotal * 0.40;
			break;
			case "mercadoPago":
			case "efectivo":
				precioTotal = precioTotal * 0.25;
				break;
		case "Europa":
		 	precioTotal = precioTotal * 0.80;
		 	break;
		 	case "debito":
		 		precioTotal = precioTotal * 0.65;
		 		break;
		 	case "mercadoPago":
		 		precioTotal = precioTotal * 0.70;
		 		break;
		 	default:
		 		precioTotal = precioTotal * 0.75;
		case "Asia":
		case "Oceania":
			precioTotal = precioTotal * 1.20; 
	}

	alert("El valor de su viaje es $" + precioTotal + ".");
}
