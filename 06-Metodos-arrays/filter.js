//entiendelo como una maquina que escoge

const nums = [1, 2, 3, 4];

const pares = nums.filter(n => n % 2 === 0); //--> una condicion de filtro

console.log(pares); // [2, 4]


//ejemplo2:
const users = [
  { name: "Juan", active: true },
  { name: "Pedro", active: false }
];

const activos = users.filter(u => u.active); // si (u.active .. filtra) como es un array de objetos, me devuelve un objeto, el que tenga active true

console.log(activos);

//***************************************************************** */
//eliminar valores falsos:
const valores = [0, 1, false, true, "", "hola"];

const limpios = valores.filter(Boolean);

console.log(limpios);
// [1, true, "hola"]

//***************************************************************** */
//buscar por texto:
const productos = ["mouse", "monitor", "teclado"];

const resultado = productos.filter(p => p.includes("mo"));

console.log(resultado);
// ["mouse", "monitor"]

