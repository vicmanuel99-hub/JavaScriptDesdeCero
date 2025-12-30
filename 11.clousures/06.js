
function crear() {
  let x = 10;
  return () => x++; //retorna x y luego le suma 1 // incrementa a x en 1
}

const f = crear();
console.log(f());
console.log(f());