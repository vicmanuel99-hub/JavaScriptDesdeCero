//async / await con arrays (muy usado)

async function cargarHabilidad() {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
  const pokemonn = await res.json();

  const nombres = pokemonn.abilities.map(u => u.ability.name);
  console.log(nombres);
}

cargarHabilidad();

// si quieres ponle try catch para manejar errores
// todo lo de la f dentro de un f { try { ... } catch (error) { txt } finally { txt } }