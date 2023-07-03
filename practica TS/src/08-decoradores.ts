function proyectar(constructor:Function) {
    constructor.prototype.hacerProyeccion = function (activar:boolean):void{
        if (activar) {
            console.log('Proyectando...');
            this.proyectando = true            
        } else {
            console.log('Dejar dee proyectar');
            this.proyectando = false
        }
    }
    constructor.prototype.agregarPersonajes = function (personajes:string[]) {
        if(!this.personajes) {
            this.personajes = personajes
        }else {
            this.personajes = this.personajes.concat(personajes)
        }
    }
}

@proyectar
class Pelicula {
    protected personajes:any
    constructor (
        public titulo:string,
        public genero: string,
        public proyectando: boolean
        
    ) {}
}

let spiderman = new Pelicula('Spiderman', 'accion', false);
(<any>spiderman).hacerProyeccion(true);
(<any>spiderman).agregarPersonajes(['Peter Parker', 'Mary Jane']);
(<any>spiderman).agregarPersonajes(['Duende Verde']);
console.log(spiderman);
