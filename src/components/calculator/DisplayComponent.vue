<template>
  <input type="text" id="display" :value="inputDisplay" disabled />
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
    name: "CalculatorComponent",
    props: {
        inputDisplay: {
            type: String,
            required: true,
        },
    },

});
</script>

<style scoped>
#display {
  margin-top: 30px;
  margin-bottom: 20px;
  width: 220px;
  height: 30px;
  border: 1px solid red;
  box-shadow: 0px 0px 30px red;
  text-align: right;
  font: 20px bold;
  color: blue;
}
</style>