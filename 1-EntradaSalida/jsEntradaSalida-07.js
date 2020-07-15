/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var numero1;
	var numero2;
	var suma;

	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

	suma = parseInt(numero1) + parseInt(numero2);

	alert("El resultado de la suma es " + suma);	
}

function restar()
{  	
	var numero1;
	var numero2;
	var resta;

	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

	resta = parseInt(numero1) - parseInt(numero2);

	alert("El resultado de la resta es " + resta);	
}

function multiplicar()
{ 
	var numero1;
	var numero2;
	var multiplicacion;

	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

	multiplicacion = parseInt(numero1) * parseInt(numero2);

	alert("El resultado de la multiplicación es " + multiplicacion);	
}

function dividir()
{
	var numero1;
	var numero2;
	var division;

	numero1 = txtIdNumeroUno.value;
	numero2 = txtIdNumeroDos.value;

	division = parseInt(numero1) / parseInt(numero2);

	alert("El resultado de la división es " + division);
}

