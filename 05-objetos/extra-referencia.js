//primer caso no afecta a al imprimirlo, pq es primitivo
let a = 10;


function suma(n){
    n++;
}
suma(a);   
console.log(a); // sigue siendo 1 porque es un valor primitivo y no se modifica

//segundo caso si afecta al imprimirlo
let b = { valor: 10 };

function sumaobjeto(obj){
    obj.valor++;
}
sumaobjeto(b);
console.log(b.valor); // ahora es 11 porque es un objeto y se modifica la referencia
//ejemplos array, objetos y funciones son tipos por referencia
