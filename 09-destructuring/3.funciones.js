
//con funciones.
//ya no usarias esto:

//function mostrar(user) {
  //console.log(user.name);
  //console.log(user.age);
//}


function mostrar({ nombre, edad }) {
  console.log(nombre);
  console.log(edad);
}

mostrar({ nombre: "Pedro", edad: 40 });