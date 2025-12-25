// dentro de una clase no se usa la palabra function
/**clase
 * constructor
 * funciones o métodos 
 * instanciar una clase
 */
class Usuario {
    constructor(nombre, edad) { // constructor es una f especial para inicializar objetos. Es reservada la palabra constructor
        this.nombre = nombre;
        this.edad = edad;
    }

    saludar() {
        console.log(`Hola, soy ${this.nombre}`);
    }
    
}

function aqui_sidebo_instanciar_f(){
    return "soy una funcion afuera de la clase";
}
    
const user1 = new Usuario("Carlos", 30);
user1.saludar();