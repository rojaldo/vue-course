<template>
  <beers-component :myRange="myRange" :propsBeers="beers" @range-changed="handleChange($event)"></beers-component>
</template>

<script lang="ts">
import Vue from "vue";
import {
  mappedGetters,
  mappedActions,
  mappedMutations,
  Actions,
  Getters,
  State,
  mappedState,
} from "@/store/Store";
import BeersComponent from "./BeersComponent.vue";

export default Vue.extend({
  components: { BeersComponent },
  data() {
    return {
      ...mappedState,
      ...mappedGetters,
      ...mappedMutations,
      ...mappedActions,
      value: false,
      myRange: [1, 5],
      beers: new Array<any>(),
    };
  },
  mounted() {
    console.log(this.getRange());
    this.value = this.isEven();
    this.myRange = this.getRange();
    this.fetchBeers().then((beers) => {
      this.beers = beers;
    });
  },
  methods: {
    handleChange(value: Array<number>) {
      this.myRange = value;
      console.log('Container handlechange: ' + value);
      this.changeRange(value);
    },
  },
});
</script>

<style scoped>
</style>