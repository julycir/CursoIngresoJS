/*Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", NO HACER NADA,
pero si no es asi, y es soltero y no es menor, mostrar el siguiente mensaje: 'Es soltero y no es menor.'*/

function mostrar()
{
	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada = txtIdEdad.value;
	estadoCivilIngresado = estadoCivil.value;

	if (edadIngresada>=18 && estadoCivilIngresado=="Soltero") {
		alert('Es soltero y no es menor.');
	}
}


