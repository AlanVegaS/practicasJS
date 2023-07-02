"use strict";
function saludo(nombre) {
    return 'Un saludo ' + nombre;
}
console.log(saludo('Alan'));
function Saludo() {
    console.log('Hola');
}
function finApp() {
    throw new Error("La aplicacion ha cerrado");
}
function mostrarPais(pais, continente) {
    if (pais && continente) {
        return pais + ' ' + continente;
    }
    return 'Sin datos';
}
console.log(mostrarPais());
let grupos;
grupos = function (datos) {
    return 'Tus grupos favoritos: ' + datos.toString();
};
console.log(grupos(['Septic Flesh', 'Haggard']));
