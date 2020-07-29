/*CIRAOLO JULIETA 
Enunciado:
Al seleccionar un destino informar si hace FRIO o CALOR en ese destino*/

function mostrar()
{
	var destinoIngresado =txtIdDestino.value;

	switch (destinoIngresado) {
	case "Bariloche":
	case "Mar del plata":
		alert("Hace FRIO en su destino.");
		break;
	case "Cataratas":
	case "San Luis":
		alert("Hace CALOR en su destino.");
		break;
	}
}