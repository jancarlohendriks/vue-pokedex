import { defineStore } from "pinia";
import { fetchPokemonList } from "@/services/pokeApi";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemonList: [],
    isLoading: false,
  }),

  actions: {
    async fetchPokemonList() {
      try {
        this.isLoading = true;
        this.pokemonList = await fetchPokemonList();
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
