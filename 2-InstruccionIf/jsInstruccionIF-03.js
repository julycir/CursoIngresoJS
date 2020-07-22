//Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.

function mostrar()
{
	var edadIngresada;
	edadIngresada = txtIdEdad.value;

	if (edadIngresada>=18) {
		alert("Usted es mayor de edad.")
	} else { // el else es el complemento de la condicion en el if
		alert("Usted es menor de edad.")
	}	
}//FIN DE LA FUNCIÓN


