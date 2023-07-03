"use strict";
let gta = {
    titulo: 'gta',
    categoria: 'accion',
    edad: 18,
    duracion: 200,
    lanzado: true,
    mostrar() {
        console.log(this.titulo);
    },
    actualizar(consola) {
        return 'XBOX';
    }
};
let gta5 = {
    titulo: 'gta5',
    categoria: 'accion',
    edad: 18,
    lanzado: true,
    mostrar() {
        console.log(this.titulo);
    },
    actualizar(consola) {
        return 'XBOX';
    }
};
class VideoJuegos {
    constructor(titulo, categoria, edad, duracion, lanzado) {
        this.titulo = titulo;
        this.categoria = categoria;
        this.edad = edad;
        this.duracion = duracion;
        this.lanzado = lanzado;
    }
    mostrar() {
        console.log(this.titulo);
    }
    actualizar(consola) {
        return consola;
    }
}
