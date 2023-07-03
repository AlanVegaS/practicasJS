function mostrarInfo(mostrar:boolean) {
    return function info(target:Object, propetyKey:string, descriptor:any) {
        if(mostrar) {
            console.log(target);
            console.log(propetyKey);
            console.log(descriptor);
        } else {
            descriptor.value = function() {
                console.log('Metodo Bloqueado');//Se modifica eel comportamiento del metodo 'encender'
            }
        }
    }
}

function miPropiedad(target:Object, propetyKey:string) {
    console.log(`Esta propiedad esta en la clase '${target.constructor.name}' y la propiedad se llama '${propetyKey}'`);
}

function otraPropiedad(target:Object, propetyKey:string, parameterIndex:number) {
    console.log(`Esta propiedad esta en la clase '${target.constructor.name}' y en la posicion '${parameterIndex}'`);
}

class PC {
    @miPropiedad marca:string = 'Asus'
    @mostrarInfo(false)
    encender(@otraPropiedad nombrePC:string):void{
        console.log(`PC de ${nombrePC} encendido`);
    }
}

let miPC = new PC();
miPC.encender('Alan')