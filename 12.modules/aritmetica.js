
//exportar funciones
function suma(a, b) {
  return a + b;
}   

function resta(a, b) {
  return a - b;
}   

export { suma, resta };

//otra forma de exportar metiendolo en un objeto
function multiplicar(a, b) {
  return a * b;
}
function dividir(a, b) {
  return a / b;
}  
export const aritmetica = { multiplicar, dividir }; // aritmetica le asigno objeto con las dos f



//**** exportacion por defecto ****// solo se puede exportar una por archivo
export default function saludar() { //igual praa clases
  console.log("Hola desde aritmetica.js");
}

/*
//exportar por defecto variables o constantes
let mensaje = "Hola Mundo";
export default mensaje ; //export { mensaje as default };  */