//estructura básica de fetch con promesas
fetch("https://pokeapi.co/api/v2/pokemon/charizard") //llamo a la API
    .then(response => response.json()) // convierto la respuesta a json
    .then(data => {             // trabajo con los datos obtenidos
        console.log("*****charizard:", data);
    })

    .catch(error => {   // manejo de errores, ejemplo si la url es incorrecta
        console.error("*****Error de fech brooo:", error);
    })

    .finally(() => {  // se ejecuta siempre al final, haya habido error o no
        console.log("*******Fetch finalizado bro ");
    });

//ahora veremos esto de manera mas comoda con async y await