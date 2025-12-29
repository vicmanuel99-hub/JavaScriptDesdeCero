const users = [
  { name: "Juan", age: 17 },
  { name: "Ana", age: 25 },
  { name: "Pedro", age: 30 }
];

const totalEdadAdultos = users
  .filter(u => u.age >= 18) //2 objetos.{ana ,25} {pedro,30}
  .map(u => u.age) // obtiene age: 25, 30
  .reduce((acc, age) => acc + age, 0); //los suma 25+30

console.log(totalEdadAdultos); // 55


//total de compras activas*******************************************
const orders = [
  { total: 100, paid: true },
  { total: 50, paid: false },
  { total: 80, paid: true }
];

const totalPagado = orders
  .filter(o => o.paid)
  .map(o => o.total)
  .reduce((acc, t) => acc + t, 0);

console.log(totalPagado);
// 180

//preparar casos para react*********************************
const users1 = [
  { name: "Juan", active: true },
  { name: "Ana", active: false },
  { name: "Pedro", active: true }
];

const lista = users1
  .filter(u => u.active)
  .map(u => ({
    label: u.name,
    value: u.name.toLowerCase() //lo pasas a minuscula
  }));

console.log(lista);


//estadisticas
const ventas = [
  { region: "Lima", monto: 100 },
  { region: "Cusco", monto: 50 },
  { region: "Lima", monto: 80 }
];

const totalPorRegion = ventas.reduce((acc, v) => {
  acc[v.region] = (acc[v.region] || 0) + v.monto;
  return acc;
}, {});

console.log(totalPorRegion);
// { Lima: 180, Cusco: 50 }



//buscar y sumar
const productos = [
  { name: "laptop", price: 3000 },
  { name: "mouse", price: 50 },
  { name: "monitor", price: 800 }
];

const totalCarrito = productos
  .filter(p => p.price > 100)
  .reduce((acc, p) => acc + p.price, 0);

console.log(totalCarrito);
// 3800

////////////////////Si abres {}, DEBES poner return. ///////////////
///es una funcion flecha

/*ejemplo explicativo:
*x => x * 2	implícito
*x => { x * 2 }	❌ no retorna
*x => { return x * 2 }	✅ correcto
*/