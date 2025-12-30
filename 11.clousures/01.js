// solo debes entender como funcionan las cousures.

//es cuando una funcion recuerda las variables ya creadas en su entorno. 
//variables publicas:
function saludar() {
  let nombre = "Juan";

  function decirHola() {
    console.log("Hola " + nombre);
  }

  return decirHola;
}

const hola = saludar();
hola();
