/*CIRAOLO JULIETA Enunciado:
al seleccionar un mes informar.
si tiene 28 días.
si tiene 30 días.
si tiene 31 días.*/

function mostrar()
{
	//tomo el mes
	var mesDelAno =txtIdMes.value;

	switch (mesDelAno) {
		case "Enero":
		case "Marzo":
		case "Mayo":
		case "Julio":
		case "Agosto":
		case "Octubre":
		case "Diciembre":
			alert("Este mes tiene 31 días.");
			break;
		case "Febrero":
			alert("Este mes tiene 28 o 29 días.");
			break;	
		case "Abril":
		case "Junio":
		case "Septiembre":
		case "Noviembre":
			alert("Este mes tiene 30 días.");
			break;		
	}
}//FIN DE LA FUNCIÓN se puede poner defauls para los q son mas casos