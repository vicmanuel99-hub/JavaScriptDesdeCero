// son ...a que dicen, abre esta caja. entrega los elementos sueltos del array


let arr = [1, 2, 3];

let arr2 = [...arr, 4, 5, 6];
console.log(arr2); // [1,2,3,4,5,6]

let arr3 = [...arr2.map(v => v * 2)];
console.log(arr3); // [2,4,6,8,10,12]

let arr4 = [...arr3.filter(v => v > 5)];
console.log(arr4); // [6,8,10,12]  

let arr5 = [...arr4];
console.log(arr5); // [6,8,10,12]

let arr6 = [...'hola'];
console.log(arr6); // ['h','o','l','a']

