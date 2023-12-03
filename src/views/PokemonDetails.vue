<template>
  <div>
    <h2>Pokemon Details</h2>
    <div v-if="pokemon">
      <h3>{{ pokemon.name }}</h3>
      <img
        :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`"
        alt="Pokemon Sprite"
      />
      <p><strong>Height:</strong> {{ pokemon.height }} decimetres</p>
      <p><strong>Weight:</strong> {{ pokemon.weight }} hectograms</p>
      <p><strong>Abilities:</strong></p>
      <ul>
        <li v-for="(ability, index) in pokemon.abilities" :key="index">
          {{ ability.ability.name }}
        </li>
      </ul>
    </div>
    <router-link to="/">Back to Home</router-link>
  </div>
</template>

<script>
export default {
  name: "PokemonDetails",
  props: ["name"],
  data() {
    return {
      pokemon: null,
    };
  },
  created() {
    this.fetchPokemonDetails();
  },
  methods: {
    async fetchPokemonDetails() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.name}`
        );
        const data = await response.json();
        this.pokemon = data;
      } catch (error) {
        console.error("Error fetching Pokémon details:", error);
      }
    },
  },
  computed: {
    pokemonId() {
      return this.pokemon.id;
    },
  },
};
</script>
