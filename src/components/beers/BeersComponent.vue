<template>
  <div class="container">
    <slider-beers-component
      @range-changed="onRangeChange($event)" :propsRange="myRange"
    ></slider-beers-component>
    <list-beers-component :beers="beersInRange"></list-beers-component>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Beer from "../../models/Beer";

import ListBeersComponent from "./ListBeersComponent.vue";
import SliderBeersComponent from "./SliderBeersComponent.vue";

export default Vue.extend({
  name: "BeersComponent",
  components: { ListBeersComponent, SliderBeersComponent },
  data() {
    return {
      beers: new Array<Beer>(),
      range: this.$props.myRange,
    };
  },
  props: {
    myRange: {
      type: Array,
    },
  },
  computed: {
    beersInRange(): Array<Beer> {
      return this.beers
        .filter(
          (beer) => beer.abv >= this.range[0] && beer.abv <= this.range[1]
        )
        .sort((a, b) => a.abv - b.abv);
    },
  },
  created() {
    this.getBeers();
    console.log('Props myRange: ' + this.$props.myRange);
    this.range = this.$props.myRange;
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
    onRangeChange(value: Array<number>) {
      this.range = value;
      this.$emit("range-changed", value);
    },
  },

});
</script>

<style scoped>
</style>

