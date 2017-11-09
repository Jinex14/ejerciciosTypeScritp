var dato ="hola";
let mensaje = "hola";

//los let ponen alias cuando entran a un scoop
// las constantes no se pueden modificar y en mayusculas.
const DATO ="Soy un dato";
//Si se pueden modificar
const PERSONA={
    nombre:"Harol"
};

if(true){
   var dato="adios";
   let mensaje="adios";
   //para el final
   PERSONA.nombre="Eddie";
}


console.log(dato);
console.log(mensaje);

console.log(PERSONA.nombre);

///////////////////////////////////////////////////////////////////////////////////////////////////

//Tipos de datos especificos

let nombre = "Jean Carlo";

//error
// nombre = 123;

let nom:string = "Jean";
let numero:number =1234;
let booleano:boolean=true;
let hoy:Date=new Date();

hoy=new Date('2017-11-05');

console.log(hoy);

let cualquier:any;

cualquier=numero;
cualquier=booleano;
cualquier=hoy;

let persona={
    nombre:"Jean",
    edad:27
};

//editar objetos solo se puede cuando tienen los mismos tipos

persona={
    nombre:"Pedro",
    edad:30
};

// Plantillas literales o templates literales

let nnom1:string="Jean";
let ape1:string="Velarde";
let year:number=27;

let textofinal="hola "+ nnom1 + " " +ape1 + " ("+year+").";

console.log(textofinal);

let textoSimple=`Hola ${nnom1} ${ape1} (${year}).`;

console.log(textoSimple);

//Si pongo esto que va salir

let texto2:string=`${1+1}`;

console.log(texto2);

let texto3:string=`${Obtenombre()}`;

console.log(texto3);

function Obtenombre(){
    return "Jean Carlo mi Dios";
}

// Parametros Obligatorios - opcionales y por defectos

//nunca se puede poner el primer parametro como opcional
function activar(quien:string , ensena:string="me enseña", curso?:string) {
    
    let mensaje:string;

    if(curso){
    mensaje=`${quien} ${ensena} ${curso}`;
    }else{
        mensaje=`${quien} ${ensena} `;
    }   
    console.log(mensaje);

}

activar("Jean","me enseña","Typescript");