
//promesas.all 
//(MUY USADO)
//📌 Ejecutar varias promesas a la vez


const p1 = fetch("/api/users").then(r => r.json()); // el api lo entrega a r y con f flecha lo convierte a json.
const p2 = fetch("/api/products").then(r => r.json());

Promise.all([p1, p2]) // ejecuto 2 apis y con then lo entrego a la f flecha 
    .then(([users, products]) => {
        console.log(users);
        console.log(products); //me imprimira las dos apis
    });



//promise.race  ... La que termine primero gana
const p3 = esperar(1000);
const p4 = esperar(2000);

Promise.race([p3, p4])
    .then(res => console.log(res));