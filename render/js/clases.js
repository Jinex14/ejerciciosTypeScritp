"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jugador = /** @class */ (function () {
    //primero sin constructor
    function jugador(nombre, equipo, goles) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.goles = goles;
    }
    return jugador;
}());
exports.jugador = jugador;
//constructor de typescript es mas fuerte que el ES5
//primero vacio
var messi = new jugador("Messi", "Bacelona", 119);
//indefinidono tiene datos
console.log(messi);
