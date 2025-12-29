//usos comunes

//copiar objetos
const user = { name: "Ana", age: 25 };
const copia = { ...user };

//Agregar / sobrescribir propiedades. le añadi edad a usuarios y los aloje en actualizados
const actualizado = {
  ...user,
  age: 26
};

//CASO REAL (ACTUALIZAR ESTADO)
const user1 = {
  name: "Juan",
  logged: false
};

const userLogged = {
  ...user1,
  logged: true
};


//SPREAD EN FUNCIONES
const nums = [1, 2, 3];

function suma(a, b, c) {
  return a + b + c;
}

suma(...nums); // 6

