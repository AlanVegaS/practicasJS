class Coche {
    #numId//attributo privado
  constructor(marca, modelo, color, velocidad = 0, year, ID) {
    //attributos
    this.marca = marca;
    this.modelo = modelo;
    this.color = color;
    this.velocidad = velocidad;
    this.year = year;
    this.#numId = ID
  }
  //metodos
  acelerar() {
    this.velocidad++;
  }
  frenar() {
    this.velocidad--;
  }
  //setters y getters
  set asignarVelocidad(nuevaVelocidad) {
    this.velocidad = nuevaVelocidad
  }
  get getVelocidad() {
    return this.velocidad
  }
  get getID() {
    return this.#numId
  }

  //metodos estaticos
  static pitar() {
    return 'piiiiii'
  }
}

//Herencia
class Camioneta extends Coche {
    constructor(marca, modelo, color, velocidad = 0, year, ID, batea) {
        super(marca, modelo, color, velocidad = 0, year, ID)
        this.batea = batea
    }
}

let miCamioneta = new Camioneta('Ford', 'Raptor', 'Roja', 150, 2023, 789654, true)
console.log(miCamioneta);

let miCoche = new Coche("Ford", "Focus", "blanco", 100, 2016, 45698544);
miCoche.acelerar()
miCoche.acelerar()
miCoche.acelerar()
miCoche.frenar()
console.log(miCoche);
miCoche.asignarVelocidad = 200
console.log(miCoche.getVelocidad);
console.log(Coche.pitar());

console.log(miCoche.getID);