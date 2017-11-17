let promesa=new Promise( function(resolve,reject){

    //se ejecuta de manera asincrona 
    setTimeout(()=>{
        console.log("Promesa terminada");

        //termina bien
        //resolve();
        
        reject();


    },1000)
} );

promesa.then(function(){
    console.log("Termino bien");
},function(){
    console.error("Termino mal");
});


function programando(desarrollador:any){
    console.log("Desarrollador: "+desarrollador.nombre);
}
let desarrollador={
    nombre:"Jean",
    nivel:"Dios"
};

programando(desarrollador);

//ejemplo 2
function programando2(desarrollador:{nombre:string}){
    console.log("Desarrollador: "+desarrollador.nombre);
}

let desarrollador2={
    name:"Jean",
    nivel:"Dios"
};
//tira error por que su campo no es igual
//programando2(desarrollador2);

function terminar(desarrollador:{nombre:string}){
    console.log("Desarrollador: "+desarrollador.nombre+" termino el programa");
}

//creacion de interfase camelkeys primera letra de toda palabra en mayuscula
interface DesarrolladorPersona{
    nombre:string,
    nivel:string
}

//Obliga a tener un standar en los campos

let desarrollador3:DesarrolladorPersona={
    nombre:"Jean",
    nivel:"Dios"
};

function programando3(desarrollador:DesarrolladorPersona){
    console.log("Desarrollador: "+desarrollador.nombre);
}

function terminar2(desarrollador:DesarrolladorPersona){
    console.log("Desarrollador: "+desarrollador.nombre+" termino el programa");
}

programando3(desarrollador3);
terminar2(desarrollador3);