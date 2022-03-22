<template>
  <div class="hello">
    <h1>Hello world!</h1>
    <p>
      {{ message }}
    </p>
    <button @click="handleClick('Click 1')">Click me!</button>
    <button @click="handleClick(3)">Click me!</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  data() {
    return {
      message: 'This is the default example of a Vue.js component. FROM CONTROLLER',
    };
  },
  methods: {
    handleClick(value: any) {
      // boolean to string
      this.message = typeof value;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
