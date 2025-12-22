//crear algoritmo que devuelva el precio del producto mas impuesto
function precioConImpuesto(precio, impuesto){

    let precioFinal = precio + (precio * impuesto / 100);
    return precioFinal;
}
let precioProducto = precioConImpuesto(200,21); //21%
console.log(precioProducto);    