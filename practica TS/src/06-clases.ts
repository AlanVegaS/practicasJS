class Coche {
    private velocidad:number = 0
    constructor(
        protected modelo:string = 'Focus', 
        protected marca: string = 'Ford', 
        protected year:number = 2016, 
        public encendido:boolean = false,
        protected color:string = 'Blanco'
        ){ }

    public arrancar():void {
        this.encendido = true
    }
    public apagar():void {
        console.log('Apagar Coche');
        this.encendido = false
    }
    private aumentarVelocidad(velocidadExtra:number):number {
        return this.velocidad += velocidadExtra
    }
    public acelerar(velocidadExtra:number = 1) {
        return this.velocidad += this.aumentarVelocidad(velocidadExtra)
    }
    public set setColor(color:string){
        this.color = color
    }
    public get getColor():string {
        return this.color
    }
    static saludar():void {
        console.log('Hola');
    }
}

class Camioneta extends Coche {
     constructor(
        protected modelo:string = 'Jeep', 
        protected marca: string = 'Jeep 3', 
        protected year:number = 2016, 
        public encendido:boolean = false,
        protected color:string = 'Verde'
     ) {
        super(modelo, marca, year, encendido, color)
        this.arrancar()
     }
     public apagar():void {
        console.log('Apagar Camioneta');
        super.apagar()
    }
}

let coche:Coche = new Coche()
coche.acelerar(15)
coche.setColor = 'Rojo'
console.log(coche.getColor);
console.log(coche);
Coche.saludar

let camioneta = new Camioneta()
camioneta.apagar()
console.log(camioneta);
