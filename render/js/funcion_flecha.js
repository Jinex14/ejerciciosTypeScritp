"use strict";
var funcion = function (a) {
    return a;
};
//se tiene que sacar el onError
var funcionF = function (a) { return a; };
console.log(funcion("normal"));
console.log(funcionF("flecha"));
