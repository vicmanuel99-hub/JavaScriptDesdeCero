let obj = {}; // forma corta de crear un objeto
let obj2 = new Object();
//////////////////////////////////////////////////
// forma larga de crear un objeto

function Usuario(){
    this.nombre = "Juan"; 
}
let user = new Usuario();
console.log(user.constructor); //lo imprime como funcion constructor


//ejemplo de tipo de dato constructor
let str1 = "1+1";
let str2 = new String("1+1");

console.log(eval(str1),eval(str2)); 
console.log(str2.valueOf()); // devuelve el valor primitivo del objeto String