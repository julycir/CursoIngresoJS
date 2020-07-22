//Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .

function mostrar()
{
	var edadIngresada;
	edadIngresada = txtIdEdad.value;

	if (edadIngresada>=13 && edadIngresada<=17) {
		alert("Usted es adolescente.")
	} 
}

//ESTO ESTA MAL PORQUE NO HABIAMOS VISTO OPERADORES LOGICOS TODAVIA
//CORRECTO: anidar un if dentro de otro