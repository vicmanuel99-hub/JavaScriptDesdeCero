//1. obtener los valores *2
const numeros = [1, 2, 3, 4];

const numerosDoble = numeros.map( n => n*2);
console.log(numerosDoble);

// 2. obtener nombres en mayusculas
const nombres = ["juan", "ana", "pedro"];
const numbresUpper = nombres.map(n => n.toUpperCase());
console.log(numbresUpper);

//objeten los 3 precios
const precios = [10, 20, 30];
const precios1 = precios.map(n => `S/${n}`);
console.log(precios1);

//obten solo los mayores o iguales a 18
const edades = [12, 18, 25, 16, 30];
const mayores = edades.filter(m => m>=18);
console.log(mayores);

//obten las palabras con mas de 3 letras
const palabras = ["sol", "luna", "estrella", "mar"];
const tresLetras = palabras.filter(n => n.length>3);
console.log(tresLetras);

// recue para obtener array con cantidad de letras de cada elemento
const letras = ["a", "b", "a", "c", "a"];
const contarLetras = letras.reduce( (contador, letra) => {
    contador[letra] = (contador[letra] || 0) + 1;
    return contador;
}, {});
console.log(contarLetras);

// suma las edades de los mayores a 18
const usuarios = [
  { nombre: "Juan", edad: 17 },
  { nombre: "Ana", edad: 25 },
  { nombre: "Pedro", edad: 30 }
];
const dd = usuarios.map(u => u.edad).filter(e => e>=18)
.reduce( (acc, edad) => acc + edad, 0);
console.log(dd);