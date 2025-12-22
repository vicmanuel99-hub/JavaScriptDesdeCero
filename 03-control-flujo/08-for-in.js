// iterar propiedades de un objeto, o tipo de variable

let user_obj = {
    id: 1,
    name: 'chanchito',
    age : 25,
};

for ( let prop in user_obj){
    console.log(prop+' es: '+ user_obj[prop]); // objeto recibe string en el corchete

}