/* crear arrar de longitud N
 y sus elementos DelayNodede 1  hasta n */

 let long = 10;

 function crearArray(n){
  
    let array  = [];

    for ( i=1;i<=n-1;i++){
        array[i-1]=i;
    }
    return array;
 }

 let resultado = crearArray(long);
 console.log(resultado);