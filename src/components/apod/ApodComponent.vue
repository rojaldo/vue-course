<template>
  <div class="container">
    <date-picker-apod @date-changed="dateChanged" :date="selectedDate"></date-picker-apod>
    <show-apod :apod="apod" ></show-apod>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import moment from "moment";
import Apod from "../../models/Apod";
import ShowApod from "./ShowApod.vue";
import DatePickerApod from "./DatePickerApod.vue";

export default Vue.extend({
  components: { ShowApod, DatePickerApod },
  name: "ApodComponent",
  data() {
    return {
      apod: new Apod(),
      selectedDate: moment().format("YYYY-MM-DD"),
    };
  },
  props: {
    propsDate: String,
    propsApod: Object,
  },
  watch: {
    propsDate(newDate: string) {
      this.selectedDate = newDate;
    },
    propsApod(newApod: any) {
      this.apod = newApod;
    },
    selectedDate(newDate: string) {
      this.$emit("date-changed", newDate);
    },
  },
  methods: {

    dateChanged(date: string) {
      this.selectedDate = date;
      // this.getApod();
    },
    getVideoId(url: string): string {
      console.log("Process url: " + url);

      const regExp =
        /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
      const match = url.match(regExp);

      if (match && match[2].length === 11) {
        return match[2];
      } else {
        return "";
      }
    },
  },
});
</script>

<style scoped>
</style>