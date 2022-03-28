<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12 col-md-6 col-lg-4 col-xl-3 mb-3" v-for="(beer, index) in beers" :key="index">
        <div class="card h-100">
          <img class="card-img-top mx-auto mt-2" :src="beer.imageUrl" :alt="beer.name" style="width: 60px"/>
          <div class="card-body">
            <h4 class="card-title">{{beer.name}}</h4>
            <p class="card-text">{{beer.tagline}}</p>
            <p class="card-text">{{beer.abv}}%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Beer from "../../models/Beer";

export default Vue.extend({
  name: "BeersComponent",
  data() {
    return {
      beers: new Array<Beer>(),
    };
  },
  mounted() {
    this.getBeers();
  },
  methods: {
    getBeers() {
      fetch("https://api.punkapi.com/v2/beers")
        .then((response) => response.json())
        .then((data) => {
          for (const json of data) {
            this.beers.push(new Beer(json));
          }
        });
    },
  },
});
</script>

<style scoped>
</style>