<template>
  <div>
    <div>
      <input v-model="searchQuery" placeholder="Search for a Pokémon" />
      <button @click="searchPokemon(searchQuery)">Search</button>
    </div>
    <ul v-if="!searchResults.length">
      <li v-for="(pokemon, index) in pokemonList" :key="index">
        {{ pokemon.name }}
        <router-link
          :to="{ name: 'PokemonDetails', params: { name: pokemon.name } }"
        >
          <button>See more</button>
        </router-link>
      </li>
    </ul>
    <ul v-else>
      <li v-for="(pokemon, index) in searchResults" :key="index">
        {{ pokemon.name }}
        <router-link
          :to="{ name: 'PokemonDetails', params: { name: pokemon.name } }"
        >
          <button>See more</button>
        </router-link>
      </li>
    </ul>
    <div v-if="isLoading">Loading...</div>
    <div>
      <button
        @click="fetchPokemonList(currentPage - 1)"
        :disabled="currentPage === 1 && !searchQuery"
      >
        Previous Page
      </button>
      <span>{{ currentPage }}</span>
      <button
        @click="fetchPokemonList(currentPage + 1)"
        :disabled="currentPage * pageSize >= totalItems && !searchQuery"
      >
        Next Page
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { usePokemonStore } from "@/stores/pokemonStore";

export default {
  name: "Home",
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    ...mapActions(usePokemonStore, ["fetchPokemonList", "searchPokemon"]),
  },
  computed: {
    ...mapWritableState(usePokemonStore, [
      "isLoading",
      "pokemonList",
      "currentPage",
      "pageSize",
      "totalItems",
      "searchResults",
    ]),

    // currentPokemonList() {
    //   return this.searchQuery ? [] : usePokemonStore().pokemonList;
    // },

    showPokemonList() {
      return !this.searchQuery || usePokemonStore().searchResults.length === 0;
    },
  },
  mounted() {
    this.fetchPokemonList();
  },
};
</script>
