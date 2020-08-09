/*CIRAOLO JULIETA 
parcial 2019 ejercicio 9

Enunciado:
Bienvenidos.
Realizar el algoritmo que permita ingresar el nombre de un país, cantidad de habitantes en millones entre 1 y 7000 (validar)
la temperaruta mínima que se registra en su territorio(entre -50 y 50) hasta que el usuario quiera e informar al terminar el ingreso por document.write:
a) La cantidad de temperaturas pares.
b) El nombre del pais con menos habitantes
c) la cantidad de paises que superan los 40 grados.
d) el promedio de habitantes entre los paises ingresados
f) la temperatura mínima ingresada, y nombre del pais que registro esa temperatura.

Testeo con los siguientes valores
(pais=argentina;habitantes = 50; t =-300(mal) ,-15(bien) )
(pais=tunes;habitantes = 10; t =1 )
(pais=islandia;habitantes = -150(mal), 15(bien); t =-13 )
(pais=china;habitantes = 2000; t =-12 ) */

function mostrar()
{
	var pais;
	var habitantes;
	var tempMinimaPais;
	var respuesta;
	var cantPares;
	var banderaMenosPoblado;
	var paisMenosPoblado;
	var menosHabitantes;
	var paisesCalurosos;
	var totalHabitantes;
	var totalPaises;
	var promedioHabitantes;
	var banderaMinima;
	var tempMinimaIngresada;
	var paisMasFrio;

	respuesta = true;
	cantPares = 0; //contador
	banderaMenosPoblado = true;
	paisesCalurosos = 0; //contador
	totalHabitantes = 0; //contador
	totalPaises = 0; //acumulador
	banderaMinima = true;

	while (respuesta) {

		pais = prompt("Ingrese el pais.");

		habitantes = parseInt(prompt("Ingrese la cantidad de habitantes en millones."));
		while (isNaN(habitantes) || habitantes < 1 || habitantes > 7000) {
			habitantes = parseInt(prompt("Por favor, ingrese la cantidad de habitantes en millones, de 1 a 7000."));
		}

		totalHabitantes += habitantes;
		totalPaises++;

		tempMinimaPais = parseInt(prompt("Ingrese la temperatura minima que se registra en este pais."));
		while (isNaN(tempMinimaPais) || tempMinimaPais < -50 || tempMinimaPais > 50) {
			tempMinimaPais = parseInt(prompt("Por favor, ingrese una temperatura minima valida, entre -50 grados y 50 grados."));
		}

		if (tempMinimaPais % 2 == 0) {
			cantPares++;
		}

		if (banderaMenosPoblado) {
			banderaMenosPoblado = false;
			paisMenosPoblado = pais;
			menosHabitantes = habitantes;
		} else {
			if (habitantes < paisMenosPoblado) {
				paisMenosPoblado = pais;
				menosHabitantes = habitantes;
			}
		}

		if (tempMinimaPais > 40) {
			paisesCalurosos++;
		}

		if (banderaMinima) {
			banderaMinima = false;
			tempMinimaIngresada = tempMinimaPais;
			paisMasFrio = pais;
		} else {
			if (tempMinimaPais < tempMinimaIngresada) {
				tempMinimaIngresada = tempMinimaPais;
				paisMasFrio = pais;
			}
		}

		respuesta = confirm("Desea continuar?");
	}

	promedioHabitantes = totalHabitantes / totalPaises;

	document.write("a) La cantidad de temperaturas pares es: " + cantPares + ".<br />b) El nombre del pais con menos habitantes es: " + paisMenosPoblado + ".<br />c) la cantidad de paises que superan los 40 grados es: " + paisesCalurosos + ".<br />d) El promedio de habitantes entre los paises ingresados es: " + promedioHabitantes + ".<br />f) La temperatura mínima ingresada es: " + tempMinimaIngresada + " y nombre del pais que registro esa temperatura es: " + paisMasFrio + ".");

}



