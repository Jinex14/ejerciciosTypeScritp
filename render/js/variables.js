"use strict";
var dato = "hola";
var mensaje = "hola";
//los let ponen alias cuando entran a un scoop
// las constantes no se pueden modificar y en mayusculas.
var DATO = "Soy un dato";
//Si se pueden modificar
var PERSONA = {
    nombre: "Harol"
};
if (true) {
    var dato = "adios";
    var mensaje_1 = "adios";
    //para el final
    PERSONA.nombre = "Eddie";
}
console.log(dato);
console.log(mensaje);
console.log(PERSONA.nombre);
