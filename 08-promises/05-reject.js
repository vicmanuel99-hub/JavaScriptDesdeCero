//Promesa con error (reject)

function login(usuario, pass) {
  return new Promise((resolve, reject) => {
    if (usuario === "admin" && pass === "123") {
      resolve("Login correcto");
    } else {
      reject("Credenciales incorrectas");
    }
  });
}

login("admin", "123")
  .then(msg => console.log(msg))
  .catch(err => console.log(err));




//🟢 ¿Qué hace .then()? (en sencillo)

//.then() dice:
//👉 “Cuando esto termine BIEN, haz esto con el resultado”

//resolve es como un return, pero entrega el resultado al .then o await