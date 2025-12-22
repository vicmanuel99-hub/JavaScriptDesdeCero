// dame el mayor y menor de un array
let array = [2,5,7,15,-5,-100,55];

function getMenorMayor(arr){
    let mayor=arr[0];
    let menor=arr[0];

    /* for(i=1;i<arr.length;i++){
        if(mayor<arr[i]){
            mayor=arr[i];
        }
         if(menor>arr[i]){
            menor=arr[i];
        } 
    }
    return [mayor,menor];
 */
    for(let numero of arr){ //numero debe tener let, sino crea una var global sin querer
        menor = menor < numero? menor : numero;
        mayor = mayor > numero ? mayor : numero;
    }
    return [mayor,menor];
}
let numeros = getMenorMayor(array)
console.log(numeros);