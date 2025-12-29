// y como seria sin await y sinc?
// no lo hagas asi, es con promesas y then

fetch("https://pokeapi.co/api/v2/pokemon/charizard")
  .then(res => res.json())
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

  //Funciona, pero es difícil de leer.