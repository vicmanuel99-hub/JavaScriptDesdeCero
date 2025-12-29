// que es? : hay dos formas de crear una función asíncrona:
// 1. usando la palabra reservada async en un f normal, o en una f de flecha

//f normal
/* async function funcionAsincrona1() {
    const pokeapiUrl = fetch("https://pokeapi.co/api/v2/pokemon/charizard");
    console.log(pokeapiUrl);
} */

//f flecha
const funcionAsincrona = async () => {
    const pokeapiUrl = fetch("https://pokeapi.co/api/v2/pokemon/charizard");
    console.log(pokeapiUrl);
}

funcionAsincrona();

//nos imprimira una promesa pendiente, pq fetch es asíncrono y tarda un tiempo en resolverse
//para esperar a que se resuelva usamos await