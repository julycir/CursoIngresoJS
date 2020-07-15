/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numero1;
	var numero2; 
	var resultadoSuma;


	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

	suma = numero1 + numero2



	alert("la suma es " + (parseInt(numero1) + parseInt(numero2)));
}

