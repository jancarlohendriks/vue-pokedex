<template>
  <div>
    <!-- <button @click="fetchPokemonList">Fetch Pokémon List</button> -->
    <p v-if="isLoading">Loading...</p>
    <ul v-else>
      <li v-for="(pokemon, index) in pokemonList" :key="index">
        {{ pokemon.name }}
        <router-link
          :to="{ name: 'PokemonDetails', params: { id: index + 1 } }"
        >
          <button>See more</button>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapActions, mapWritableState } from "pinia";
import { usePokemonStore } from "@/stores/pokemonStore";

export default {
  name: "Home",
  methods: {
    ...mapActions(usePokemonStore, ["fetchPokemonList"]),
  },
  computed: {
    ...mapWritableState(usePokemonStore, ["isLoading", "pokemonList"]),
  },
  mounted() {
    this.fetchPokemonList();
  },
};
</script>
