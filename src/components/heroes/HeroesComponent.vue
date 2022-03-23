<template>
  <div class="container">
      <hero-form-component @add-hero="addHero"></hero-form-component>
    <hr />
    <heroes-list-component :heroes="heroes"></heroes-list-component>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "../../models/Hero";
import HeroesListComponent from "./HeroesListComponent.vue";
import HeroFormComponent from "./HeroFormComponent.vue";

export default Vue.extend({
  components: { HeroesListComponent, HeroFormComponent },
  name: "HeroesComponent",
  data() {
    return {
      heroes: [
        new Hero("Batman", "Bruce Wayne"),
        new Hero("Superman", "Clark Kent"),
        new Hero("Spiderman", "Peter Parker"),
      ],
      newHero: {
        name: "",
        alias: "",
      },
    };
  },
  methods: {
    addHero(hero: Hero) {
      this.heroes.push(hero);
    }
  },
});
</script>

<style scoped>
</style>