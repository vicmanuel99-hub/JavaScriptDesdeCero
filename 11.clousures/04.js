// en asincronia

function esperar(ms) {
  let mensaje = "Terminó";

  setTimeout(() => {
    console.log(mensaje);
  }, ms);
}

esperar(2000);
//Aunque la función terminó, mensaje sigue ahí.
