
//quiero agrupar todo en un mismo objeto
//programacion orientada a objetos // oop poo
//datos comunes entre si en un mismo objeto
let usuario = {
    email: 'nico@holamundo.io',
    name: 'nicolas',
    direccion: {  calle: 'av siempre viva',  numero: 123,},
    activo: true,
    recuperarClave: function(){ console.log('clave recuperada');   },
};

console.log(usuario);
