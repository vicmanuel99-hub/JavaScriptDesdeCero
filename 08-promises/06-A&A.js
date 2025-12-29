
//Promesa + async / await
async function ejecutar() {
  try {
    const msg = await login("admin", "123");
    console.log(msg);
  } catch (e) { // e es el error  para que lo imprima
    console.log(e);
  }
}

ejecutar();