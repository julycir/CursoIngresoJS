/*CIRAOLO JULIETA
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese f ó m .");

	while (!(sexoIngresado === "f" || sexoIngresado === "m")) {
		sexoIngresado = prompt("ingrese f ó m .");
	}

	txtIdSexo.value=sexoIngresado;
}