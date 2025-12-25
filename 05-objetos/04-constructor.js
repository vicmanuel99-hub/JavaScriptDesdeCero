//funcion constructor, como intro a clases

function Usuario(){
    this.nombre = "Juan";
    this.recuperar = function(){
        console.log('password recovered');
    }
}

let usuario1 = new Usuario(); // cuando la funcion no tiene return, imprime el this. y se llaman clases

console.log(usuario1);
console.log(usuario1.recuperar()); // si quisiera imprimir la f2
