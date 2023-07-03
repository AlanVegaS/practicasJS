"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function proyectar(constructor) {
    constructor.prototype.hacerProyeccion = function (activar) {
        if (activar) {
            console.log('Proyectando...');
            this.proyectando = true;
        }
        else {
            console.log('Dejar dee proyectar');
            this.proyectando = false;
        }
    };
    constructor.prototype.agregarPersonajes = function (personajes) {
        if (!this.personajes) {
            this.personajes = personajes;
        }
        else {
            this.personajes = this.personajes.concat(personajes);
        }
    };
}
let Pelicula = class Pelicula {
    constructor(titulo, genero, proyectando) {
        this.titulo = titulo;
        this.genero = genero;
        this.proyectando = proyectando;
    }
};
Pelicula = __decorate([
    proyectar,
    __metadata("design:paramtypes", [String, String, Boolean])
], Pelicula);
let spiderman = new Pelicula('Spiderman', 'accion', false);
spiderman.hacerProyeccion(true);
spiderman.agregarPersonajes(['Peter Parker', 'Mary Jane']);
spiderman.agregarPersonajes(['Duende Verde']);
console.log(spiderman);
