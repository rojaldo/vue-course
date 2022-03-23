<template>
    <div class="container">
        {{apod}}
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