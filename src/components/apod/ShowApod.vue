<template>
  <div class="jumbotron">
    <h1 class="display-3">{{ apod.title }}</h1>
    <p class="lead">{{ apod.date }}</p>
    <div class="container-fluid d-flex">
      <img
        class="mx-auto"
        :src="apod.url"
        :alt="apod.title"
        v-if="apod.media_type === 'image'"
      />

      <youtube
        class="mx-auto"
        :video-id="YoutubeID"
        v-if="apod.media_type === 'video'"
      ></youtube>
    </div>
    <hr class="my-2" />
    <p>{{ apod.explanation }}</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button"
        >Jumbo action name</a
      >
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Apod from "../../models/Apod";

export default Vue.extend({
  props: {
    date: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      apod: new Apod(),
    };
  },
  computed: {
    YoutubeID(): string {
      const url = this.apod.url;
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
  methods: {
    getApod() {
      const apiKey = "DEMO_KEY";
      fetch(
        `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&date=${this.date}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.apod = data;
        });
    },
  },
  watch: {
    date(newDate: string, oldDate: string): void {
      console.log("Date changed: " + newDate);
      this.getApod();
    },
  },
  mounted() {
    this.getApod();
  }
});
</script>

<style scoped>
</style>