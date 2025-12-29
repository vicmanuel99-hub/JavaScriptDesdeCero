// ahora le hacemos un try catch a nuestra funcion async await para manejar errores

const funcioncharizardDatos = async () => {
    try {   
    const pokeapiUrl = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
    const data_ =  await pokeapiUrl.json(); //convierto a json pokeurl y espero a que se resuelva
    console.log(data_);
    }  
    
    catch {  // si hay un error en el try, se captura aqui      
        console.log("*****Error de fetch brooo:");
    } finally {  // se ejecuta siempre al final, haya habido error o no
        console.log("*******Fetch finalizado bro ");
    }

}
funcioncharizardDatos();    