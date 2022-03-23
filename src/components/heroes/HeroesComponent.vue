<template>
  <div class="container">
    <div class="form-group mb-2">
      <label for="">Hero Name</label>
      <input
        type="text"
        name=""
        id=""
        class="form-control"
        placeholder=""
        aria-describedby="helpId"
        v-model="heroName"
      />
    </div>
    <button type="button" class="btn btn-primary" @click="addHero()" :disabled="heroName === ''">
      Add Hero
    </button>
    <hr />

    <ul class="list-group">
      <li class="list-group-item" v-for="(hero, index) in heroes" :key="index">
        {{ hero }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HeroesComponent",
  data() {
    return {
      heroes: ["Batman", "Superman", "Spiderman"],
      heroName: "",
    };
  },
  methods: {
    addHero() {
      this.heroes.push(this.heroName);
      this.heroName = "";
    },
  },
});
</script>

<style scoped>
</style>