
const promesa = new Promise((resolve, reject) => {
    // setTimeout( f,2000) 
  setTimeout(  () => { resolve("terminó"); }  ,2000);

});

/*
Promesa NO se ejecuta como función
Promesa se CONSUME con:
  - .then()
  - await

  */

  