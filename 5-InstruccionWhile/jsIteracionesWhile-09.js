/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar()
{	// declarar variables
	var banderaDelPrimero;
	var numero;
	var maximo;
	var minimo;
	var respuesta;
	//iniciar variables
	banderaDelPrimero="es el primero";
	respuesta = true;

	while(respuesta)
	{
		
		respuesta=prompt("Desea continuar?");
	}

	txtIdMaximo.value=numeroMaximo;
	txtIdMinimo.value=numeroMinimo;

}/