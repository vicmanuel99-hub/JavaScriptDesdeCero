// debe devolver la cantidad de numeros positivos de un array
let array = [2,5,7,15,-5,-100,55];

function cuantosPositivos(arr){
    let num=0;
    for(let elemento of arr){
        elemento > 0? num++: true;

    }
    return num;
}

let resultado = cuantosPositivos(array);
console.log(resultado);
