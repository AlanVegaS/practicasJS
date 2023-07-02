function saludo(nombre:string):string {
    return 'Un saludo ' + nombre
}

console.log(saludo('Alan'));

function Saludo():void {
    console.log('Hola');
}

function finApp():never {
    throw new Error("La aplicacion ha cerrado");
    
}

function mostrarPais(pais?:string, continente?:string) {
    if(pais && continente) {
        return pais + ' ' + continente
    }
    return 'Sin datos' 
}
console.log(mostrarPais());

let grupos: (datos:string[]) => string
grupos = function (datos:string[]) {
    return 'Tus grupos favoritos: '+datos.toString()
}

console.log(grupos(['Septic Flesh', 'Haggard']));
