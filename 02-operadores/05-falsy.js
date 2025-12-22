/* 

or(||) Devuelve el PRIMER valor que sea “verdadero”

Valores falsy (se consideran “falso”):

"" (string vacío)
null
undefined
false
NaN
0

*/
let nombre = '';
let username = nombre || 'anonimo'; //imprime anonimo porque el o paso primero por nombre y como no habia nada paso a anonimo
console.log(username); // anonimo
/*JavaScript dice:

“Este valor no sirve, pruebo el siguiente”

*/
//pero si le damos valor a nombre

//******en resuemn || dice dame alguien real ssino el que quede uU */

nombre2 = 'maia';
let username2 = nombre2 || 'anonimo'; // toma a nombre2 de inicio 
console.log(username2);// imprime maia
    /*
    JavaScript dice:

    “Este valor sirve, ya no evalúo lo demás”
    */


 /* || busca un check

Si encuentra algo cierto → lo devuelve   y finish analis.

Si todo es falso → devuelve el último */

/******************************************************* */

// ahora usaremos el y
function fn1(){
    console.log('soy function 1');
    return false;
}

 /* && busca un error

Si encuentra algo falsy → lo devuelve   y finish analis.

Si todo es válido → devuelve el último */
 
function fn2(){
    console.log('soy function 2');
    return true;
}

let x = fn1() && fn2();

//&& es mujer, dice dame un malo que sea vacioxd, sino el que queda