//Enunciado: Las lámparas están al mismo precio de $35 pesos final.
//NO FUNCIONA NADA 
/*
function CalcularPrecio () 
{
	var precioLampara;
	precioLampara = 35;
	var cantidadDeLamparasCompradas;
	cantidadDeLamparasCompradas = txtIdCantidad.value;

	var precioConDescuento;
	precioConDescuento = txtIdprecioDescuento.value;
	var marcaLampara;
	marcaLampara = Marca.value;

	//A.    Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
	if (cantidadDeLamparasCompradas>=6) {
		
	} else {
	//B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuprecioConDescuento = (precioLampara * cantidadDeLamparasCompradas) * 0.5;ento del 40 % y si es de otra marca el descuento es del 30%.
		if (cantidadDeLamparasCompradas==5 && marcaLampara == 'ArgentinaLuz') {
			precioConDescuento = (precioLampara * cantidadDeLamparasCompradas) * 0.6;
		} else {
			if
		} (cantidadDeLamparasCompradas==5 && marcaLampara != 'ArgentinaLuz') {
			precioConDescuento = (precioLampara * cantidadDeLamparasCompradas) * 0.7;
		} else {
			//C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
			if (cantidadDeLamparasCompradas==4 && marcaLampara == 'ArgentinaLuz' || marcaLampara == 'FelipeLamparas') {
				precioConDescuento = (precioLampara * cantidadDeLamparasCompradas) * 0.75;
				} else {
						precioConDescuento = (precioLampara * cantidadDeLamparasCompradas) * 0.8;
					} //D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
					if (cantidadDeLamparasCompradas==3 && marcaLampara == 'ArgentinaLuz' ) {
						precioConDescuento = (precioLampara * cantidadDeLamparasCompradas) * 0.85;
					} else {
						if (cantidadDeLamparasCompradas=3 && marcaLampara == 'FelipeLamparas') {
							precioConDescuento = (precioLampara * cantidadDeLamparasCompradas) * 0.9;
						} else {
							precioConDescuento = (precioLampara * cantidadDeLamparasCompradas) * 0.95;
						}
					}	
		}

		//E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:  ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
		if (precioConDescuento>=120) {
			preciocConDescuento = precioConDescuento * 1.1;
			alert("Usted pago " + preciocConDescuento + " de IIBB.")
		}
	}
}*/

/* ELSE IF
Enunciado:
Las lámparas están al mismo precio de $35 pesos final.
A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.*/

function CalcularPrecio () 
{
	var precioLampara;
	precioLampara = 35;
	var cantidadDeLamparasCompradas;
	cantidadDeLamparasCompradas = txtIdCantidad.value;

	var precioConDescuento;
	precioConDescuento = txtIdprecioDescuento.value;
	var marcaLampara;
	marcaLampara = Marca.value;

	// A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
	if (cantidadDeLamparasCompradas>=6) {
		precioConDescuento = (precioLampara * cantidadDeLamparasCompradas) * 0.5;
	//B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
	} else if (cantidadDeLamparasCompradas==5 && marcaLampara == 'ArgentinaLuz') {
		precioConDescuento = (precioLampara * cantidadDeLamparasCompradas) * 0.6;
	} else if (cantidadDeLamparasCompradas==5 && marcaLampara != 'ArgentinaLuz') {
		precioConDescuento = (precioLampara * cantidadDeLamparasCompradas) * 0.7;
	//C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
	} else if (cantidadDeLamparasCompradas==4 && marcaLampara == 'ArgentinaLuz' || marcaLampara == 'FelipeLamparas') {
		precioConDescuento = (precioLampara * cantidadDeLamparasCompradas) * 0.75;
	} else if (cantidadDeLamparasCompradas==4 && marcaLampara != 'ArgentinaLuz' || marcaLampara != 'FelipeLamparas') {
		precioConDescuento = (precioLampara * cantidadDeLamparasCompradas) * 0.8;
	//D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
	} else if (cantidadDeLamparasCompradas==3 && marcaLampara == 'ArgentinaLuz' ) {
		precioConDescuento = (precioLampara * cantidadDeLamparasCompradas) * 0.85;
	} else if (cantidadDeLamparasCompradas=3 && marcaLampara == 'FelipeLamparas') {
		precioConDescuento = (precioLampara * cantidadDeLamparasCompradas) * 0.9;
	} else if (cantidadDeLamparasCompradas=3 && marcaLampara != 'ArgentinaLuz' && marcaLampara != 'FelipeLamparas') {
		precioConDescuento = (precioLampara * cantidadDeLamparasCompradas) * 0.95;
	}

	//E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.
	if (precioConDescuento>=120) {
			precioConDescuento = precioConDescuento * 1.1;
			alert("Usted pago " + precioConDescuento + " de IIBB.")
		}
}
