import { createRouter, createWebHashHistory } from "vue-router";
import Home from "@/views/Home.vue";
import PokemonDetails from "@/views/PokemonDetails.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/pokemon/:id",
    name: "PokemonDetails",
    component: PokemonDetails,
    props: true,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
