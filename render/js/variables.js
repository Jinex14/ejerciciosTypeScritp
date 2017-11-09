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
///////////////////////////////////////////////////////////////////////////////////////////////////
//Tipos de datos especificos
var nombre = "Jean Carlo";
//error
// nombre = 123;
var nom = "Jean";
var numero = 1234;
var booleano = true;
var hoy = new Date();
hoy = new Date('2017-11-05');
console.log(hoy);
var cualquier;
cualquier = numero;
cualquier = booleano;
cualquier = hoy;
var persona = {
    nombre: "Jean",
    edad: 27
};
//editar objetos solo se puede cuando tienen los mismos tipos
persona = {
    nombre: "Pedro",
    edad: 30
};
// Plantillas literales o templates literales
var nnom1 = "Jean";
var ape1 = "Velarde";
var year = 27;
var textofinal = "hola " + nnom1 + " " + ape1 + " (" + year + ").";
console.log(textofinal);
var textoSimple = "Hola " + nnom1 + " " + ape1 + " (" + year + ").";
console.log(textoSimple);
