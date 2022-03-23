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
        v-model="newHero.name"
      />
      <label for="">Hero Alias</label>
      <input
        type="text"
        name=""
        id=""
        class="form-control"
        placeholder=""
        aria-describedby="helpId"
        v-model="newHero.alias"
      />
    </div>
    <button
      type="button"
      class="btn btn-primary"
      @click="addHero()"
      :disabled="newHero.name === ''"
    >
      Add Hero
    </button>
    <hr />

    <ul class="list-group">
      <li class="list-group-item" v-for="(hero, index) in heroes" :key="index">
        <b>{{ hero.name }}</b>
        <br />
        {{ hero.alias }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "../../models/Hero";

export default Vue.extend({
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
    addHero() {
      this.heroes.push(this.newHero);
      this.newHero = new Hero();
    },
  },
});
</script>

<style scoped>
</style>