//variables privadas

function crearUsuario(nombre) {
  return {
    getNombre() {
      return nombre;
    }
  };
}

const user = crearUsuario("Ana");
console.log(user.getNombre()); // Ana