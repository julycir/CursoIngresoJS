//Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).

function mostrar()
{
	var edadIngresada;
	edadIngresada = txtIdEdad.value;

	if (edadIngresada>=18) {
		alert("Usted es mayor de edad.")
	} 
	else if (edadIngresada<=17 && edadIngresada>=13) {
		alert("Usted es adolescente.")
	} 
	else (edadIngresada>13) {
			alert("Usted es niño.")
	}
}