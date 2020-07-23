/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4

function mostrar()
{
	var notaAlumno;
	var min;
	var max;

	max=10;
	min=1;
	notaAlumno = Math.floor(Math.random() * (max-min) + min);	
	console.log(notaAlumno);

	if (notaAlumno>=9) {
		alert("EXCELENTE")
	} else {
		if (notaAlumno>=4) {
			alert("APROBÓ")
		} 
		else {
			alert("Vamos, la proxima se puede")
		} 	
	}
}
*/

function mostrar()
{
	var numeroRandom1;
	var numeroRandom2;	
	var paridad1;
	var paridad2;
	var multiploCinco1;
	var multiploCinco2;

	numeroRandom1 = Math.floor(Math.random() * (51-1) + 1);	
	numeroRandom2 = Math.floor(Math.random() * (51-1) + 1);	

	// probando a ver si funciona
	console.log(numeroRandom1) 
	console.log(numeroRandom2)

	paridad1 = numeroRandom1 % 2;
	paridad2 = numeroRandom2 % 2;
	divisiblePorCinco1 = numeroRandom1 % 5;
	divisiblePorCinco2 = numeroRandom2 % 5;


	// a. si los 2 son pares 	 
	if (paridad1 === 0 && paridad2 === 0) {
		var multiplicar;
		multiplicar = numeroRandom1 * numeroRandom2;
	} // funciona ok
	else { // b. si los 2 son impares
		if (paridad1 === 1 && paridad2 === 1) {
		    var restar;
			restar = numeroRandom1 - numeroRandom2;
		} // funciona ok
	}

 	// c. si alguno es divisible por 5 elevarlo al cubo

	if (divisiblePorCinco1 === 0) {
		var elevarCubo;
		elevar = Math.pow(numeroRandom1, 3);
	} else {
		if (divisiblePorCinco2 === 0) {
			var elevarCubo;
			elevar = Math.pow(numeroRandom2, 3);
		}
	} // NO FUNCIONA, DA UNDEFINED
	
	// d. si no sucede ningun caso 

	if (paridad1 != paridad2) {
		var noPasoNada;
		noPasoNada = 'No paso nada'
	} else {
		if (divisiblePorCinco1 != 0 || divisiblePorCinco2 != 0) {
			noPasoNada = 'No paso nada'
		}
	}
	
	// e. mostrar el resultado en un solo alert 
	// alert(multiplicar + restar + elevarCubo + noPasoNada)
	// no funciona
}
