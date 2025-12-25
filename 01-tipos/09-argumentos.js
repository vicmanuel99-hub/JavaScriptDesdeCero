// 02- funciones con parametros//
function suma(a,b){//argumentos
    return `la suma es ${a+b}`;//parametros
    //tambien puede ser -->  return a+b;
}
let resultado = suma(2,5);
console.log(resultado);

//funcion flecha es mas corta y  muy usada
const sumar = (a, b) => a + b; // sumar tiene parametros a y b entonces a+b
console.log(sumar(2, 3));

