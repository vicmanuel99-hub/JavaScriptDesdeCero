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


personaje.prop=  "soy una nueva propiedad"; //agregar nueva propiedad
 // personaje ={ prop: "..."}

//objecto,prororype añade un nuevoValor al padre de todos los objetos
Object.prototype.nuevoValor = "valor agregado a todos los objetos";
// si imprimimos cualquier objeto va a tener esta nueva propiedad
console.log(personaje.nuevoValor); //



//recorrer objetos sin heredar el Object.prototype
/*
for (let prop in user) {
    if (user.hasOwnProperty(prop)) {
        console.log(prop);
    }
        */
