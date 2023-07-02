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

empresa = {//TS no deja editar el objeto de forma parcial o con un tipo de valor diferente
    nombre: 'Microsoft',
    sector: 'Informatica'
}

empresa.facturacion = ''