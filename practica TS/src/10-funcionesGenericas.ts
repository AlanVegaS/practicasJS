function funcionTS(mensaje:any):any {
    return mensaje
}

console.log(funcionTS('Hola soy Alan').replace('Hola', 'Que tal'));
console.log(funcionTS(12).replace('Hola', 'Que tal'));
console.log(funcionTS(true).replace('Hola', 'Que tal'));


function funcionGenerica<T>(mensaje:T) {
    return mensaje
}

console.log(funcionGenerica('Hola soy Alan').replace('Hola', 'Que tal'));
console.log(funcionGenerica(12));
console.log(funcionGenerica(true));