<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "../../models/Hero";

export default Vue.extend({
  name: "HeroFormComponent",
  data() {
    return {
      newHero: new Hero(),
    };
  },
  methods: {
    addHero() {
      this.$emit("add-hero", this.newHero);
      this.newHero = new Hero();
    },
  },
});
</script>

<style scoped>
</style>