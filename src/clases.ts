
export class jugador{
    nombre:string;
    equipo:string;
    goles:number;
    acumulacion:boolean;
    apodo:string;
//primero sin constructor
    constructor(nombre:string,equipo:string,goles:number){
        this.nombre=nombre;
        this.equipo=equipo;
        this.goles=goles;
    }

}

//constructor de typescript es mas fuerte que el ES5
//primero vacio
let messi:jugador=new jugador("Messi","Bacelona",119);
//indefinidono tiene datos
console.log(messi);