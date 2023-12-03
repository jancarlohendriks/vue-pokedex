<template>
  <div class="pokemon">
    <!-- <img
      v-if="pokemon.sprites && pokemon.sprites.front_default"
      :src="pokemon.sprites.front_default"
      alt="Pokemon Image"
    />
    <h2>{{ pokemon.name }}</h2>
    <p v-for="(type, index) in pokemon.types" :key="index">
      {{ type.type.name }}
    </p> -->
  </div>
</template>

<script>
import axios from "axios";
import { ref, onMounted } from "vue";

export default {
  props: {
    pokemonUrl: String,
  },
  setup() {
    const pokemon = ref({});

    onMounted(async () => {
      try {
        const response = await axios.get(this.pokemonUrl);
        console.log(response);
        pokemon.value = response.data;
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    });

    return { pokemon };
  },
};
</script>

<style scoped>
.pokemon {
  text-align: center;
  margin: 20px;
  padding: 20px;
  border: 1px solid #ccc;
}

img {
  width: 100px;
  height: 100px;
}
</style>
