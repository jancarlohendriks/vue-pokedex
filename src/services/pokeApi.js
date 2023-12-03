export async function fetchPokemonList(page = 1, pageSize = 10) {
  try {
    const offset = (page - 1) * pageSize;
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${pageSize}`
    );
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error fetching Pokémon list:", error);
    throw error;
  }
}

export async function searchPokemon(query) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
    const data = await response.json();
    return [data];
  } catch (error) {
    console.error("Error searching Pokémon:", error);
    throw error;
  }
}
