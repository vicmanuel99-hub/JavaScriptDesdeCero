import {PI,a,usuario,password} from './constantes.js'; //  un punto si estamos en mismo nivel de carpeta
import saludar , {suma as sumsum, resta, aritmetica}  from './aritmetica.js'; // con as le pongo alias a suma
//import saludar from './aritmetica.js'; //importacion por defecto no lleva llaves

console.log(PI+"  "+a);
console.log(usuario+"  "+password);
console.log(sumsum(4,2));
console.log(resta(4,2));

//importar elementos de un objeto
console.log(aritmetica.multiplicar(3,5));
console.log(aritmetica.dividir(10,2));

saludar();