
let programador={
    name:"jean",
    nivel:"Dios",
    edad:36
}

//si se quieren los datos por separado.

let name:string=programador.name;
let nivel:string=programador.nivel;
let edad:number=programador.edad;

console.log(name,nivel,edad);

let {name,nivel,edad}=programador;

//orden no importa siempre que el nombre sea igual. Si se pone 2 puntos se transforma en un alias.

console.log(name,nivel,edad);

let programadorA:string[]=["jean","materia","harol"];

//En los arreglos es secuencial

let [Dios , gris, pulpin]=programadorA;

console.log(Dios,gris,pulpin);