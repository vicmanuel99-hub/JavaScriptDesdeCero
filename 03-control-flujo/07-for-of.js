// iterar listado de elementos arrays
let  animales = ['chanchito', 'dragon', 'perrito'];

for ( let elemento of animales) { //debe tener let, sino crea una var global sin querer
    console.log(elemento);
}

// con while tambien se puede

let i=0;
while (i<animales.length){
    console.log(animales[i]);
    i++;
}

// si vas a acceder a los elementos de un array o obj usa for of