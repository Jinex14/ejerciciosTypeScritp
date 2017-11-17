"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jugador = /** @class */ (function () {
    //primero sin constructor
    function jugador(nombre, equipo, goles) {
        this.nombre = nombre;
        this.equipo = equipo;
        this.goles = goles;
    }
    /**
     * name
     */
    jugador.prototype.borracho = function () {
        console.log(this.nombre + " no juega es un pobre borracho");
    };
    jugador.prototype.heroe = function () {
        console.log(nombre + " es el heroe del partido");
    };
    return jugador;
}());
exports.jugador = jugador;
//constructor de typescript es mas fuerte que el ES5
//primero vacio
var messi = new jugador("Messi", "Bacelona", 119);
//indefinidono tiene datos
console.log(messi);
