const nums = [1, 2, 3];

const suma = nums.reduce((acc, n) => acc + n, 0); // 0 es valor inicial de suma

console.log(suma); // 6

// acc = acumulador
// 0 = valor inicial

const carrito = [
  { producto: "camisa", precio: 50 },
  { producto: "pantalon", precio: 80 }
];

const total = carrito.reduce((acc, item) => acc + item.precio, 0);

console.log(total); // 130



//***************************************************** */
// multiplicar todos:
const nums = [1, 2, 3, 4];

const producto = nums.reduce((acc, n) => acc * n, 1);

console.log(producto);
// 24


//***************************************************** */
//contar ocurrencias:
const votos = ["A", "B", "A", "C", "A"];

const conteo = votos.reduce((acc, v) => {
  acc[v] = (acc[v] || 0) + 1;
  return acc;
}, {});

console.log(conteo);
// { A: 3, B: 1, C: 1 }


//********************************************************** */
// agrupar por categoria
const items = [
  { name: "camisa", cat: "ropa" },
  { name: "pantalon", cat: "ropa" },
  { name: "mouse", cat: "tech" }
];

const agrupados = items.reduce((acc, item) => {
  if (!acc[item.cat]) acc[item.cat] = [];
  acc[item.cat].push(item);
  return acc;
}, {});

console.log(agrupados);