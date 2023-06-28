let nombres = ['Alan', 'Eduardo', 'Caro']
let peliculas = {nombre:'Spiderman', genero:'accion', anio:2002}

for (let i = 0; i < nombres.length; i++) {
    console.log(nombres[i]);
}/*
Alan
Eduardo
Caro*/
nombres = ['Alan', 'Eduardo', 'Caro']
for (const nombre of nombres) {
    console.log(nombre);
}/*
Alan
Eduardo
Caro*/
for (const iterator of Object.values(peliculas)) {
    console.log(iterator);
}/**
Spiderman
accion
2002 */

nombres = ['Alan', 'Eduardo', 'Caro']
peliculas = {nombre:'Spiderman', genero:'accion', anio:2002}
for (const nombre in nombres) {
    console.log(nombre);
}/**
0
1
2 */
for (const key in peliculas) {
    console.log(key);
}/**
nombre
genero
anio */

nombres = ['Alan', 'Eduardo', 'Caro']
nombres.forEach((nombre, indice, array) => console.log(`${indice} ${nombre} ${array}`))
/**
0 Alan Alan,Eduardo,Caro
1 Eduardo Alan,Eduardo,Caro
2 Caro Alan,Eduardo,Caro
 */

