interface VideoJuegoEsquema {
    titulo:string,
    categoria:string,
    edad:number,
    duracion?:number,
    lanzado:boolean,
    mostrar():void,
    actualizar(consola:string):string
}

let gta:VideoJuegoEsquema = {
    titulo:'gta',
    categoria:'accion',
    edad:18,
    duracion:200,
    lanzado:true,
    mostrar() {
        console.log(this.titulo);
    },
    actualizar(consola) {
        return 'XBOX'
    }
}

let gta5:VideoJuegoEsquema = {
    titulo:'gta5',
    categoria:'accion',
    edad:18,
    lanzado:true,
    mostrar() {
        console.log(this.titulo);
    },
    actualizar(consola) {
        return 'XBOX'
    }
}

class VideoJuegos implements VideoJuegoEsquema {
    constructor(
        public titulo:string,
        public categoria:string,
        public edad:number,
        public duracion:number,
        public lanzado:boolean
    ){}

    public mostrar ():void {
        console.log(this.titulo);
    }
    public actualizar(consola: string): string {
        return consola
    }
}