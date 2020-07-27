/*CIRAOLO JULIETA

Enunciado: Las lámparas están al mismo precio de $35 pesos final.
A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.
*/

function CalcularPrecio () 
{
	var precioLampara;
	precioLampara = 35;
	var cantidadDeLamparasCompradas;
	cantidadDeLamparasCompradas = parseInt(txtIdCantidad.value);
	var marcaLampara;
	marcaLampara = Marca.value;
	var subTotal;
	subTotal = cantidadDeLamparasCompradas * precioLampara;
	var precioConDescuento;
	txtIdPrecioDescuento.value = precioConDescuento;
	var iibb;
	var precioTotal;
	precioTotal = precioConDescuento + iibb;

	if (cantidadDeLamparasCompradas>=6) {
		precioConDescuento = subTotal * 0.50;
		console.log(precioConDescuento)
	} else {
		if (cantidadDeLamparasCompradas===5) {
			if (marcaLampara==="ArgentinaLuz") {
				precioConDescuento = subTotal * 0.60;
			} else {
				precioConDescuento = subTotal * 0.70;
			}
			console.log(precioConDescuento);
		} else {
			if (cantidadDeLamparasCompradas===4) {
				if (marcaLampara==="ArgentinaLuz" || marcaLampara==="FelipeLamparas") {
					precioConDescuento = subTotal * 0.75;
				} else {
					precioConDescuento = subTotal * 0.80;
				}
				console.log(precioConDescuento);
			} else {
				if (cantidadDeLamparasCompradas===3) {
					if (marcaLampara==="ArgentinaLuz") {
						precioConDescuento = subTotal * 0.85;
					}
					if (marcaLampara==="FelipeLamparas") {
						precioConDescuento = subTotal * 0.90;
					} else {
						precioConDescuento = subTotal * 0.95;
					}
					console.log(precioConDescuento);
				}
 			}
		}
	}

	//tema IIBB
	if (precioConDescuento>=120) {
		iibb = precioConDescuento * 0.10;
		alert("Usted pago " + iibb + " de IIBB.")
	}
	txtIdPrecioDescuento.value = precioTotal;
}
	