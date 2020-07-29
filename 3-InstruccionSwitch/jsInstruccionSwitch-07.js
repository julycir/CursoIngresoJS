/*CIRAOLO JULIETA <scriptEnunciado:
Al selecionar un destino , indicar el punto cardinal de nuestro pais en donde se encuentra Norte, Sur, Este u Oeste*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	switch (destinoIngresado) {
		case "Bariloche":
			alert("Usted se encuentra en el SUR.");
			break;
		case "Cataratas":
			alert("Usted se encuentra en el NORTE.");
			break;
		case "Mar del plata":
			alert("Usted se encuentra en el ESTE.");
			break;
		case "San Luis":
			alert("Usted se encuentra en el OESTE.");
			break;
	}
}