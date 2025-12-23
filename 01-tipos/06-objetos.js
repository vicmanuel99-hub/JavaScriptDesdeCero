//personaje de TV

let nombre = "Tanjiro";
let anime = "Demon slayer";
let edad = 16;

let personaje = { // reconombrando variables
    nombre: "tanjiro",
    anime: "DEMON SLAYER",
    edad: 16,
};
console.log(personaje);
console.log(personaje.nombre); //imprime nombre
console.log(personaje['anime']); //otro metodo de acceso a la var

personaje.edad  = 2; //renombrar  elemento edad
personaje['edad'] = 2; //otro metodo

delete personaje.edad; //por si quiero eniminar una variable
console.log(personaje);
