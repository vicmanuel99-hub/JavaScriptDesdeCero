//obtejener el nombre, cantidad de argumentos y lista de argumentos

function Usuario(nombre){
    this.nombre = nombre;
}

console.log('nombre de f: ', Usuario.name);
console.log('cantidad de argumentos f:', Usuario.length);

const U = Usuario
let user = new U('Nicolas');
console.log('lista de argumentos: ', user);

//////////////podemos pasar f a otra f como argumento

function of(Fn, arg){
    return new Fn(arg); // return new Usuario('vic')
}
let user1 = of(Usuario, 'vic');
console.log(user1);

// las podemos retornar dentro de otras f
function returned(){
    return function hola(){
        console.log('hola desde funcion retornada');
    }
}
let saludo = returned();
saludo(); //ejecuta la f