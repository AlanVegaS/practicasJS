//tipos basicos
let texto:string = 'Hola mundo'

let numero:number = 12

let booleano:boolean = false

let normal:any = 'String'
normal = 12

let persona:string = 'Alan'
persona = 'Eduardo'

let cualquera:unknown = 'texto'
cualquera = true

if (typeof cualquera ==='number') {
    let miNumero:number = cualquera
}