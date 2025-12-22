// salir de un loop break
// continue para saltarnos uno

// ejemplo con whiel

let i = 0;

while ( i< 6){
    i++;
    if ( i == 2){
        continue; // no continua en esta iteracion, vuelve arriba
    }
    if (i == 4){
        break;
    }
    console.log(i);
}