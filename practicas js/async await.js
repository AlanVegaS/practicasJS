async function peticion() {
    console.log('Hola');
    await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json))
    console.log('Fin1');
}

peticion()
console.log('Fin2');

function name() {
    console.log('Hola');
}

export default peticion;