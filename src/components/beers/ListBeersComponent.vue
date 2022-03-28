<template>
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
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        props: {
            beers: {
                type: Array,
                required: true,
            },
        },
    })

</script>

<style scoped>

</style>