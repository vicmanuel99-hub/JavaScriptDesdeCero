//obtener un elemento por su indice, 
// le paso el array y el indice y me da el elemento
// el elemento debe existir

function getbyIdx(arr, idx){
   /*  if(idx< arr.length){
        return arr[idx];
    }else{
        return 'parametro fuera';
    } */

       return idx < arr.length && idx>=0  ?  arr[idx] :'parametro fuera'; 
}

let resultado = getbyIdx([1,2],1);
console.log(resultado);