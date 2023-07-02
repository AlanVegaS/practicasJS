"use strict";
let personas = ['Alan', 'Eduardo'];
personas.push('Vega');
let years = [1, 2, 3, 4];
years.push(5);
// Tuplas
let peliculas = ['Batman', true, 1990];
peliculas.push(2); //no deberia de hacerse un push por buenas practicas
// Enum
var DatosPersonales;
(function (DatosPersonales) {
    DatosPersonales["nombre"] = "Alan";
    DatosPersonales[DatosPersonales["ine"] = 154] = "ine";
    DatosPersonales["direccion"] = "Ecatepec";
    DatosPersonales["cuidad"] = "Ecatepec";
})(DatosPersonales || (DatosPersonales = {}));
// Parseo de valores
let texto_desconocido = 'Texto de una peticion ajax';
let frase = texto_desconocido; // <string> parsea el valor a string
