import { defineStore } from "pinia";
import { fetchPokemonList, searchPokemon } from "../services/pokeApi";

export const usePokemonStore = defineStore("pokemon", {
  state: () => ({
    pokemonList: [],
    currentPage: 1,
    pageSize: 10,
    totalItems: 0,
    isLoading: false,
    searchResults: [],
  }),

  actions: {
    async fetchPokemonList(page = 1) {
      try {
        this.isLoading = true;
        const pageSize = this.pageSize;
        this.pokemonList = await fetchPokemonList(page, pageSize);
        this.currentPage = page;
        this.totalItems = 1292;
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      } finally {
        this.isLoading = false;
      }
    },
    async searchPokemon(query) {
      try {
        this.isLoading = true;
        this.searchResults = await searchPokemon(query);
      } catch (error) {
        console.error("Error fetching Pokémon list:", error);
      } finally {
        this.isLoading = false;
      }
    },
  },
});
