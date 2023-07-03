"use strict";
class Coche {
    constructor(modelo = 'Focus', marca = 'Ford', year = 2016, encendido = false, color = 'Blanco') {
        this.modelo = modelo;
        this.marca = marca;
        this.year = year;
        this.encendido = encendido;
        this.color = color;
        this.velocidad = 0;
    }
    arrancar() {
        this.encendido = true;
    }
    apagar() {
        console.log('Apagar Coche');
        this.encendido = false;
    }
    aumentarVelocidad(velocidadExtra) {
        return this.velocidad += velocidadExtra;
    }
    acelerar(velocidadExtra = 1) {
        return this.velocidad += this.aumentarVelocidad(velocidadExtra);
    }
    set setColor(color) {
        this.color = color;
    }
    get getColor() {
        return this.color;
    }
    static saludar() {
        console.log('Hola');
    }
}
class Camioneta extends Coche {
    constructor(modelo = 'Jeep', marca = 'Jeep 3', year = 2016, encendido = false, color = 'Verde') {
        super(modelo, marca, year, encendido, color);
        this.modelo = modelo;
        this.marca = marca;
        this.year = year;
        this.encendido = encendido;
        this.color = color;
        this.arrancar();
    }
    apagar() {
        console.log('Apagar Camioneta');
        super.apagar();
    }
}
let coche = new Coche();
coche.acelerar(15);
coche.setColor = 'Rojo';
console.log(coche.getColor);
console.log(coche);
Coche.saludar;
let camioneta = new Camioneta();
camioneta.apagar();
console.log(camioneta);
