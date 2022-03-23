<template>
    <ul class="list-group">
      <li class="list-group-item" v-for="(hero, index) in heroes" :key="index">
        <b>{{ hero.name }}</b>
        <br />
        {{ hero.alias }}
        <br />
        <button type="button" class="btn btn-danger" @click="removeHero(index)">
          Remove Hero
        </button>
      </li>
    </ul>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'HeroesListComponent',
        props: {
            heroes: {
                type: Array,
                required: true,
            },
        },
        methods: {
            removeHero(index: number) {
                this.heroes.splice(index, 1);
            },
        },
        
    })
</script>

<style scoped>

</style>