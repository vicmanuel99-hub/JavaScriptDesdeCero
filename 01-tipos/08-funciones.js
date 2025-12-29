//01-funciones muy simples
 function saludar(){
    console.log('saluda soy una funsion');
}

saludar();
//-------------------------------
function suma(){
    return 2+2;
}
let resultado = suma();
console.log(resultado); //console.log(suma());  ok
////-----------------funcion flecha
// f flecha sin parametros y sin llaves, hace return automatico
const sumaFlecha = () => 2 + 2;

// f flecha con llaves, debes ponerle return
const sumaFlecha2 = () => {  return 2 + 2; };

// f flecha con un parametro ( si quieres pones (n*2) funcion  =)
const doble = n => n * 2;

// f flecha con varios parametros
const sumar = (a, b) => (a + b);

// f flecha con varios parametros y llaves
const sumarYMultiplicar = (a, b) => {
    const suma = a + b;
    return suma*2 ;
}

//ejemplos de lo que imprime:
/* const a = () => 10;
const b = () => (10);
const c = () => ({ x: 10 });
const d = () => { x: 10 };

a(); // 10
b(); // 10
c(); // { x: 10 }
d(); // undefined */

