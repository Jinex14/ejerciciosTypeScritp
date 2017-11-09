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