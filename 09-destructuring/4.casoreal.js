//sacar el dato de un objeto dentro de otro obj

const objeto1 = {
  objeto2: {  id: 1, email: "a@b.com"}
};

const { objeto2 } = objeto1; //filtrame lo de dentro {} .. saco afuera objeto2
const { email } = objeto2; //ya lo puedo llamar y sacar afuera email

console.log(email);

//O en una sola línea:
//const { objeto2: { email } } = objeto1;
//console.log(email);