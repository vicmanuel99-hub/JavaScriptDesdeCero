/**explicacion sencilla
 * 
 * map:	Transforma elementos
 * filter:	Filtra elementos
 * reduce:	Reduce todo a un solo valor  
 * .---- No modifican el array original.
 */
const nums = [1, 2, 3];
const dobles = nums.map(n => n * 2);

console.log(dobles); // [2, 4, 6]

//****************************************************************
//de un array de objetis.. la maquina lo convierte en array de nombres
const users = [
  { name: "Juan", age: 20 },
  { name: "Ana", age: 30 }
];

const names = users.map(u => u.name);

console.log(names); // ["Juan", "Ana"]


//************************************************************
// pasar a mayusculas:
const nombres = ["juan", "ana", "pedro"];

const mayus = nombres.map(n => n.toUpperCase());

console.log(mayus); // ["JUAN", "ANA", "PEDRO"]


//************************************************************
//agregar una propiedad
const users2 = [
  { name: "Juana" },
  { name: "vic" }
];

const usersConId = users2.map((u, i) => ({
  ...u,
  id: i + 1
}));

console.log(usersConId);


//dar formato de dinero
const precios = [10, 20, 30];

const preciosTexto = precios.map(p => `$${p}.00`);

console.log(preciosTexto);
// ["$10.00", "$20.00", "$30.00"]

//