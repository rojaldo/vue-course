<template>
    <div class="container">
        <div class="jumbotron">
            <h1 class="display-3">{{apod.title}}</h1>
            <p class="lead">{{apod.date}}</p>
            <div class="container-fluid d-flex">
                <img class="mx-auto" :src="apod.url" :alt="apod.title">
            </div>
            <hr class="my-2">
            <p>{{apod.explanation}}</p>
            <p class="lead">
                <a class="btn btn-primary btn-lg" href="Jumbo action link" role="button">Jumbo action name</a>
            </p>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue'

    export default Vue.extend({
        name: 'ApodComponent',
        data() {
            return {
                apod: {},
            };
        },
        methods: {
            getApod() {
                fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
                    .then(response => response.json())
                    .then(data => {
                        this.apod = data;
                    });
            },
        },
        mounted() {
            this.getApod();
        },
    })
        
</script>

<style scoped>

</style>