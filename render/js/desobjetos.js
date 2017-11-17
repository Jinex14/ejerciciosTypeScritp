"use strict";
var programador = {
    name: "jean",
    nivel: "Dios",
    edad: 36
};
//si se quieren los datos por separado.
var name = programador.name;
var nivel = programador.nivel;
var edad = programador.edad;
console.log(name, nivel, edad);
var name = programador.name, nivel = programador.nivel, edad = programador.edad;
//orden no importa siempre que el nombre sea igual. Si se pone 2 puntos se transforma en un alias.
console.log(name, nivel, edad);
var programadorA = ["jean", "materia", "harol"];
//En los arreglos es secuencial
var Dios = programadorA[0], gris = programadorA[1], pulpin = programadorA[2];
console.log(Dios, gris, pulpin);
