//Al ingresar una edad solo debemos informar si la persona NO es adolescente.

function mostrar()
{
	var edadIngresada;
	edadIngresada = txtIdEdad.value;

	if (edadIngresada>=18 || edadIngresada<=12) {
		alert("Usted no es adolescente.")
	}
}


/*dados estos tres numeros, mostrar por alert el mayor

var numeroUno = 12;
var numeroDos = 2;
var numeroTres = 22;

if(numeroUno>numeroDos&&numeroUno>numeroTres){
    alert(numeroUno)
}
if(numeroDos>numeroUno&&numeroDos>numeroTres){
    alert(numeroDos)
}
if(numeroTres>numeroUno&&numeroTres>numeroDos){
    alert(numeroTres)
}
*/