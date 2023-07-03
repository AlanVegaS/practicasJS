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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function mostrarInfo(mostrar) {
    return function info(target, propetyKey, descriptor) {
        if (mostrar) {
            console.log(target);
            console.log(propetyKey);
            console.log(descriptor);
        }
        else {
            descriptor.value = function () {
                console.log('Metodo Bloqueado'); //Se modifica eel comportamiento del metodo 'encender'
            };
        }
    };
}
function miPropiedad(target, propetyKey) {
    console.log(`Esta propiedad esta en la clase '${target.constructor.name}' y la propiedad se llama '${propetyKey}'`);
}
function otraPropiedad(target, propetyKey, parameterIndex) {
    console.log(`Esta propiedad esta en la clase '${target.constructor.name}' y en la posicion '${parameterIndex}'`);
}
class PC {
    constructor() {
        this.marca = 'Asus';
    }
    encender(nombrePC) {
        console.log(`PC de ${nombrePC} encendido`);
    }
}
__decorate([
    miPropiedad,
    __metadata("design:type", String)
], PC.prototype, "marca", void 0);
__decorate([
    mostrarInfo(false),
    __param(0, otraPropiedad),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PC.prototype, "encender", null);
let miPC = new PC();
miPC.encender('Alan');
