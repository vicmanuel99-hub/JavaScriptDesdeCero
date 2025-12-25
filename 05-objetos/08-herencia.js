class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    hablar() {
        console.log(this.nombre+"Hace un sonido");
    } 
} 

//herencia
class Perro extends Animal { // perro hereda lo de animal
    hablar() { // aqui sobre escribo el hablar ya existente de padre, si no lo hago, se ejecuta el primer saludar
        
        //puedo traer metodos de padre con super:
        super.hablar();
        console.log("Guau");
    }
}

const perro = new Perro("Firulais"); //instanciar la clase Perro
perro.hablar();


