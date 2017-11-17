"use strict";
var promesa = new Promise(function (resolve, reject) {
    //se ejecuta de manera asincrona 
    setTimeout(function () {
        console.log("Promesa terminada");
        //termina bien
        //resolve();
        reject();
    }, 1000);
});
promesa.then(function () {
    console.log("Termino bien");
}, function () {
    console.error("Termino mal");
});
function programando(desarrollador) {
    console.log("Desarrollador: " + desarrollador.nombre);
}
var desarrollador = {
    nombre: "Jean",
    nivel: "Dios"
};
programando(desarrollador);
//ejemplo 2
function programando2(desarrollador) {
    console.log("Desarrollador: " + desarrollador.nombre);
}
var desarrollador2 = {
    name: "Jean",
    nivel: "Dios"
};
//tira error por que su campo no es igual
//programando2(desarrollador2);
function terminar(desarrollador) {
    console.log("Desarrollador: " + desarrollador.nombre + " termino el programa");
}
//Obliga a tener un standar en los campos
var desarrollador3 = {
    nombre: "Jean",
    nivel: "Dios"
};
function programando3(desarrollador) {
    console.log("Desarrollador: " + desarrollador.nombre);
}
function terminar2(desarrollador) {
    console.log("Desarrollador: " + desarrollador.nombre + " termino el programa");
}
programando3(desarrollador3);
terminar2(desarrollador3);
