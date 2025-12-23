const user = { 
    id:1, 
     };

user.name='nicolas'; //puedo agregar propiedades dinamicamente
user.guardar = function(){
    console.log('usuario guardado', user.name);
}
user.guardar();

delete user.name; //eliminar propiedades dinamicamente
console.log(user);

// si es const obj.. podemos agregar o eliminar, siempre
// que se quede como objeto.

Object.freeze ({id:1});//congelar el objeto, no se pueden agregar o eliminar propiedades
Object.seal({id:1}); // sellar el objeto, no se pueden agregar o eliminar propiedades, pero si modificar las existentes 

