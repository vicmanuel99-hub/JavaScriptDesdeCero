//SPREAD vs rest

const user = {
  name: "Luis",
  age: 30,
  role: "admin"
};

const { role, ...resto } = user;  //...resto encasula en una caja
console.log(role); // "admin"
console.log(resto); // { name: "Luis", age: 30 }

