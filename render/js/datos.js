"use strict";
//primero el tipo any luego string
function Saludar(nombre) {
    console.log("Hola " + nombre);
}
var wolverine = {
    nombre: "Logan"
};
//primero tipo sin string 
Saludar(wolverine.nombre);
