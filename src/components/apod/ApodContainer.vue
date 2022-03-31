<template>
  <apod-component
    :propsDate="myDate"
    :propsApod="apod"
    @date-changed="handleChange($event)"
  ></apod-component>
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
import ApodComponent from "./ApodComponent.vue";
import Apod from "../../models/Apod";

export default Vue.extend({
  components: { ApodComponent },
  data() {
    return {
      ...mappedState,
      ...mappedGetters,
      ...mappedMutations,
      ...mappedActions,
      myDate: "",
      apod: new Apod(),
    };
  },
  mounted() {
    this.myDate = this.getApodDate();
    this.fetchApod().then((apod) => {
      this.apod = new Apod(apod);
    });
  },
  methods: {
    handleChange(date: string) {
      this.myDate = date;
      console.log("Container handlechange: " + date);
      this.setApodDate(date);
      this.fetchApod().then((apod) => {
        this.apod = new Apod(apod);
      });
    },
  },
});
</script>

<style scoped>
</style>