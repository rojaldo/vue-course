<template>
  <div class="container-fluid my-4">
    <vue-slider v-model="range"></vue-slider>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import "vue-slider-component/theme/default.css";
import VueSlider from "vue-slider-component";

export default Vue.extend({
  name: "SliderBeersComponent",
  components: { VueSlider },
  data() {
    return {
      range: [0, 5],
    };
  },
  watch: {
    range(value: Array<number>) {
      console.log(value);
      this.$emit("range-changed", value);
    },
  },
});
</script>

<style scoped>
</style>