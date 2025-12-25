//03-funciones que trabajan con objetos!
// aqui ya estoy estructurando.
function crearUsuario(name,email){

    return {
        email,
        name,
        recuperar: function(){ console.log('password recovered'); 
        //varible : tipo de variable
        },
    }

}

let user1 = crearUsuario('nico','vic@hotmail.com');
let user2 = crearUsuario('juan',' jua@hotmail.com');

console.log(user1); // me imprime los nombres y la funcion.. no lo q retorna esa segunda funcion
console.log(user2);
// si quieres imprimir lo que dice la f 2:
user1.recuperar(); 
user2.recuperar();