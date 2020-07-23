// Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.'

function mostrar()
{
	var edadIngresada;
	edadIngresada = txtIdEdad.value;
	var estadoCivilIngresado;
	estadoCivilIngresado = estadoCivil.value;

	if (edadIngresada<18 && estadoCivilIngresado!="Soltero") {
		alert('Es muy pequeño para NO ser soltero.');
	}
}

/*ERROR: jsInstruccionIF-07.js:10 Uncaught ReferenceError: Soltero is not defined
    at mostrar (jsInstruccionIF-07.js:10)
    at HTMLAnchorElement.onclick (InstruccionIF-07.html:45)

    HABIA PUESTO SOLTERO SIN LAS COMILLAS*/

//MEJOR ASI

function mostrar()
{
	var edadIngresada;
	var estadoCivilIngresado;

	edadIngresada = txtIdEdad.value;
	estadoCivilIngresado = estadoCivil.value;

	if (edadIngresada<18 && estadoCivilIngresado!="Soltero") {
		alert('Es muy pequeño para NO ser soltero.');
	}
}