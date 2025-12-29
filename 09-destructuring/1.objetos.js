//DESTRUCTURING

//desglosa los valores de un objeto de manera mas rapida y directa.

objeto1 = {
    nombre : "victor",
    edad : 19,
}
//ya no usaremos esto:
//const name = user.name;
//const age = user.age;

const { nombre, edad, pais = "peru"} = objeto1; // si quiero le puedo añadir un objeto mas que no existe aun
console.log(nombre, edad, pais);

