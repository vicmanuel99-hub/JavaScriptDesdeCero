/*
*ancho x alto
*8k 7680 x 4320
*4K 3840 x 2160
*wqhd 2560 x 1440
FHD 1920 x 1080
hd 1280x720

debe ser mayor o igual que ancho y alto para que cumpla con el nombre

*/
function nombreResolucion(ancho,alto){
    
    switch (true) {

    case ancho>=1920 && alto>=1080 :
        return 'FHD';
        break;
        case ancho>=1280 && alto>=720 :
        return 'HD';
        break;
    
    default:
        return 'diablos que nitidezxd';
}
}

let nombre = nombreResolucion(18,7628);
console.log(nombre);