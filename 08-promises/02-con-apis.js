    fetch("https://pokeapi.co/api/v2/pokemon/charizard")
    .then(res => res.json())
    .then(pokemon => {
        console.log(pokemon.name);
    })
    .catch(err => {
        console.log("Error:", err);
    });

    //fetch siempre devolvera una promesa