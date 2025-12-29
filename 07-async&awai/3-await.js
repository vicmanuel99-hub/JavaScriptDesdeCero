//ahora si ponemos await a fetch, espera a que se resuelva la promesa fetch, recien ahi continua

const funcioncharizard = async () => {
    const pokeapiUrl = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
    console.log(pokeapiUrl);
}

funcioncharizard(); //ahora si que me lo imprime resuelto
//pero me imprime toda la respuesta de fetch, no los datos en si
//para eso, igual uso await en response.json()

const funcioncharizardDatos = async () => {
    const pokeapiUrl = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
    const data_ =  await pokeapiUrl.json(); //convierto a json pokeurl y espero a que se resuelva
    console.log(data_);
}
funcioncharizardDatos();