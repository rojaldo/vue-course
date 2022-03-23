<template>
  <div>
    <b-tabs content-class="mt-3">
      <b-tab title="Calculator"><calculator-component></calculator-component></b-tab>
      <b-tab title="Heroes"><heroes-component></heroes-component></b-tab>
      <b-tab title="Heroes" active><apod-component></apod-component></b-tab>
    </b-tabs>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import ApodComponent from "./components/apod/ApodComponent.vue";
import CalculatorComponent from "./components/calculator/CalculatorComponent.vue";
import HeroesComponent from "./components/heroes/HeroesComponent.vue";

export default Vue.extend({
  components: {
    CalculatorComponent,
    HeroesComponent,
    ApodComponent,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
