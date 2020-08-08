/*CIRAOLO JULIETA
recuperatorio 2019 - ejercicio 7
Enunciado:
Bienvenidos.
Realizar el algoritmo que permita el ingreso de 10 bolsas de alimento por prompt,con los kilos (validar entre 0 y 500) , sabor validar(carne vegetales pollo) e informar por alert:
a) El promedio de los kilos totales.
b) El mas liviano y su sabor
c) La cantidad de sabor carne y el promedio de kilos de sabor carne*/

function mostrar()
{
	var cantAlimento;
	var kilos;
	var kilosTotales;
	var liviano;
	var alimentoMasLiviano;
	var saborAlimentoMasLiviano;
	var promedioKilos;
	var sabor;
	var cantidadCarne;
	var totalCarne;
	var promedioKilosCarne;

	cantAlimento = 0; //contador
	kilosTotales = 0; //acumulador
	liviano = true //bandera;
	cantidadCarne = 0;
	totalCarne = 0;

	for (let cantAlimento = 0; cantAlimento < 10; cantAlimento++) {

		do {
			sabor = prompt("Ingrese el sabor del alimento: carne, vegetales o pollo");

			while (sabor != "carne" || sabor != "vegetales" || sabor != "pollo") {
				sabor = prompt("Por favor, ingrese el sabor del alimento: carne, vegetales o pollo");
			}

		} while (sabor != "carne" || sabor != "vegetales" || sabor != "pollo");

		do {
			kilos = parseInt(prompt("Ingrese los kilos que pesa la bolsa."));

			while (isNaN(kilos) || kilos < 0 || kilos > 500) {
				kilos = parseInt(prompt("Por favor, ingrese los kilos que pesa la bolsa."));
			}	
			kilosTotales += kilos;

			if (liviano) {
				liviano = false;
				alimentoMasLiviano = sabor;
			}
		
		if (sabor == "carne") {
				cantidadCarne += kilos;
				totalCarne++;
			}

		} while (
			isNaN(kilos) || kilos < 0 || kilos > 500);
	}

	cantAlimento++;

	promedioKilos = kilosTotales / cantAlimento;

	alert(promedioKilos + alimentoMasLiviano + cantidadCarne + promedioKilosCarne);

	

}
