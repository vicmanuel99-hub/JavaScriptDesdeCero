function Punto(x, y) {
    this.x = x;
    this.y = y;
    this.dibujar = function() {
        console.log('dibujar');
    }
}

//nucna uses este metodo es malisimo para crear objetos
/* const punto = new Function('x', 'y', `
    this.x = x;
    this.y = y;
    this.dibujar = function() {
        console.log('dibujar');
    }
`); */

const p = new Punto(1,2);
//mejor este
Punto.call({}, 1, 2); //this = {}
Punto.apply({}, [1, 2]); //igual que call pero los parametros van en un array
console.log(p);

//tambien podemos añadir otro parametro
let puntoextra = { z: 9};
Punto.call(puntoextra, 1, 2);
console.log(puntoextra);