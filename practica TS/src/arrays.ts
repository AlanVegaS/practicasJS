let personas:string[] = ['Alan', 'Eduardo']
personas.push('Vega')

let years:number[] = [1,2,3,4]
years.push(5)

// Tuplas
let peliculas:[string, boolean, number] = ['Batman', true, 1990]
peliculas.push(2)//no deberia de hacerse un push por buenas practicas

// Enum
enum DatosPersonales {
    nombre = 'Alan',
    ine = 154,
    direccion = 'Ecatepec',
    cuidad = 'Ecatepec'
}

// Parseo de valores
let texto_desconocido:any = 'Texto de una peticion ajax'
let frase:string = <string> texto_desconocido // <string> parsea el valor a string