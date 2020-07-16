/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var temperatura;
	var temperaturaFahrenheit;
	var temperaturaCentigrados;

	temperatura = txtIdTemperatura.value;
	temperaturaFahrenheit = parseInt(temperatura);

	temperaturaCentigrados = Math.ceil((temperaturaFahrenheit - 32) / 1.8);

	alert(temperatura + ' Fahrenheit son ' + temperaturaCentigrados + ' centígrados.');
}

function CentigradosFahrenheit () 
{
	var temperatura;
	var temperaturaCentigrados;
	var temperaturaFahrenheit;
	
	temperatura = txtIdTemperatura.value;
	temperaturaCentigrados = parseInt(temperatura);

	temperaturaFahrenheit = Math.ceil((temperaturaCentigrados * 1.8) + 32);
 
	alert(temperatura + ' centígrados son ' + temperaturaFahrenheit + ' Fahrenheit.');

	//℉ =℃ * 1.8000+ 32.00
}
