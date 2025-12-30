//jemplo de mantener estado

function toggle() {
  let activo = false;

  return function () {
    activo = !activo;
    console.log(activo);
  };
}

const cambiar = toggle();
cambiar(); // true
cambiar(); // false