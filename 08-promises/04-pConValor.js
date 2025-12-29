///promesa que devuelve un valor

function obtenerNumero() {
  return new Promise( resolve => { resolve(10);} );  //resolve es como return pero de promesas. y se imprime acontinuacion
}

//asi se imprime una promesa.. obtener numero le da a the. y then hace lo siguiente.. resolve10 pasa a n. entonces imprime n
obtenerNumero().then(n => console.log(n));