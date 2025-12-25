
let edad  = 14;

if (edad>17) {
    console.log('user mayor de edad');
} else if(edad>13) {
    console.log('usuario necesita estar acompañado de un mayor');
} else {
    console.log('user menor de edad');
}

// para mover una linea es alt+flecha arriba

//if para objetos
const objeto1 = {
    casa: 'grande',
    puertas: 4,
};

if('casa' in objeto1){
    console.log('la propiedad casa existe en objeto1');
}