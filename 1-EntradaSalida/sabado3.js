function ejercicioTres() {
    var importeUno;
    var importeDos;
    var resultadoSuma;
    var descuento;
    var precioConDescuento;
    var iva; 
    var precioFinal;

    importeUno = prompt("Ingrese el importe número 1");
    importeDos = prompt("Ingrese el importe número 2");
    descuento = prompt("Ingrese un porcentaje de descuento");

    importeUno = parseInt(importeUno);
    importeDos = parseInt(importeDos);
    descuento = parseInt(descuento);

    resultadoSuma = importeUno + importeDos;

    var precioConDescuento = resultadoSuma - (descuento * resultadoSuma / 100);

    var iva = 1.21; 
    var precioFinal = precioConDescuento * iva;

    alert("Los productos cuestan $" + importeUno + " y $" + importeDos + ", sumados son $" + resultadoSuma + ", tienen un descuento de $" + descuento + " pesos, el precio total con descuento es $" + precioConDescuento + ", el IVA es de $" + iva + " y el precio final con IVA es $" + precioFinal + ".")
}
