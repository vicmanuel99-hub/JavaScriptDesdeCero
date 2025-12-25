// acceder a las propiedades e un objeto   .
// sin listar propiedades heredadas 

let punto = { x: 10, y: 20 };

if ('dibujar' in punto) {
    console.log('existe la propiedad dibujar');
}
// formas de acceder a las propiedades
console.log(punto.x); // notacion punto
console.log(punto['y']); // notacion corchetes
for (let llave of Object.keys(punto)) {
    console.log('llave: ', punto[llave]);
}
for (let entrada of Object.entries(punto)) { 
    console.log('entrada: ', entrada);
}

