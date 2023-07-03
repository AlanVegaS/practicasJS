type empresas = {
    nombre: string
    sector: string,
    facturacion: number,
    mostrar: () => string
} 

let empresa1:empresas = {
    nombre: 'Microsoft',
    sector: 'Informatica',
    facturacion: 5_000_000,
    mostrar: function() {
        return ''
    }
}

let empresa2:empresas = {
    nombre: 'Microsoft',
    sector: 'Informatica',
    facturacion: 5_000_000,
    mostrar: () => {
        return ''
    }
}

let empresa:{
    nombre: string
    sector: string,
    facturacion: number
} = {
    nombre: 'Microsoft',
    sector: 'Informatica',
    facturacion: 5_000_000
}

empresa = {
    nombre: 'Microsoft',
    sector: 'Informatica',
    facturacion: 5_000_000
}