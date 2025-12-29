//setTimeout envuelto en Promise (delay)
function esperar(ms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve("listo");
    }, ms);
  });
}

esperar(2000).then(msg => console.log(msg));