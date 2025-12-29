//ejemplo estructura
const colores = ["rojo", "verde", "azul"];

const [color1, color2] = colores; //toma los dos primeros elemento y los aloja en las nuevas var

console.log(color1,color2); //rojo verde

//*****************Puedo saltarme valores
const [colora, ,colorc] = colores;
console.log(colora,colorc); //rojo azul

//*****asignar al resto de numeros */
const [a1, ...resto] = colores;
console.log(a1,resto);  //rojo   ['verde', 'azul']

