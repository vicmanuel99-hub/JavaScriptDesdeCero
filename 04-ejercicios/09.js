//// pasar de un array de pares a un array normal

let pairs = [ 
    [1, { name: 'nicolas',}], 
    [2, {  name: 'felipe',}], 
    [3, {  name: 'chanchiotpo',}] 
    ];

    function imprimeArray(arr){
        let array = [];
        
        for ( let i in arr){
            
            array[i] = [i, arr[i][1]]; 
        }
        
        return array;
    }

    let result = imprimeArray(pairs);
    console.log(result);


