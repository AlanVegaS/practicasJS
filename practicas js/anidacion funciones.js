function imprimirNombre() {
    function name() {
        function apellido() {
            return 'Alan Vega'
        }
        return apellido
    }
    return name
}

console.log(imprimirNombre()()());