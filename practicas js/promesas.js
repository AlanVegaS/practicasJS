let productos = [
    { nombre: "PC", marca: "asus", precio: 1200 },
    { nombre: "Celular", marca: "Samsung", precio: 720 },
    { nombre: "Camara", marca: "Canon", precio: 900 }
];

const productoComprado = () => {
    console.log('producto comprado');
    return new Promise ((resolve)=> {
        setTimeout(() => {
            resolve(productos[0])
        }, 2000);
    })
}
const getProductos = () => {
    console.log('Get Productos');
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            resolve(productos)
            reject(Error('Ha ocurrido un error'))
        }, 2000)
    })
}
getProductos()
    .then(items => {
        console.log(items);
        return productoComprado()
    })
    .then(item => console.log(item))
    .catch(error => console.log(error.message))
    .finally(() => console.log('Promesa finalizada'));