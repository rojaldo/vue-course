<template>
  <div class="jumbotron">
    <h1 class="display-3">{{ apod.title }}</h1>
    <p class="lead">{{ apod.date }}</p>
    <div class="container-fluid d-flex">
      <img
        class="mx-auto"
        :src="apod.url"
        :alt="apod.title"
        v-if="apod.mediaType === 'image'"
      />

      <youtube
        class="mx-auto"
        :video-id="YoutubeID"
        v-if="apod.mediaType === 'video'"
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
    apod: {
      type: Apod,
      required: true,
    },
  },
  data() {
    return {
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

});
</script>

<style scoped>
</style>