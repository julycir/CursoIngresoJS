/*CIRAOLO JULIETA
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar()
{
	var sexoIngresado;
	sexoIngresado = prompt("ingrese su sexo: f si es femenino o m si es masculino.");
	sexoIngresado = sexoIngresado.toLocaleUpperCase();

	while (!(sexoIngresado === "F" || sexoIngresado === "M")) {
		sexoIngresado = prompt("error, por favor ingrese su sexo: f si es femenino o m si es masculino.");
	}

	txtIdSexo.value = sexoIngresado;
	console.log(sexoIngresado);
}