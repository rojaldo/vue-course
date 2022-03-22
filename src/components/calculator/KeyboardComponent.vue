<template>
  <div>
    <input type="button" value="7" id="keys" @click="handleClick(7)" />
    <input type="button" value="8" id="keys" @click="handleClick(8)" />
    <input type="button" value="9" id="keys" @click="handleClick(9)" />
    <input type="button" value="-" id="keys" @click="handleClick('-')" />
    <br />
    <input type="button" value="4" id="keys" @click="handleClick(4)" />
    <input type="button" value="5" id="keys" @click="handleClick(5)" />
    <input type="button" value="6" id="keys" @click="handleClick(6)" />
    <input type="button" value="*" id="keys" @click="handleClick('*')" />
    <br />
    <input type="button" value="1" id="keys" @click="handleClick(1)" />
    <input type="button" value="2" id="keys" @click="handleClick(2)" />
    <input type="button" value="3" id="keys" @click="handleClick(3)" />
    <input type="button" value="/" id="keys" @click="handleClick('/')" />
    <br />
    <input type="button" value="0" id="keys" @click="handleClick(0)" />
    <input type="button" value="=" id="equal" @click="handleClick('=')" />
    <input type="button" value="+" id="keys" @click="handleClick('+')" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "KeyboardComponent",
  methods: {
    handleClick(value: string | number) {
      this.$emit("on-click", value);
    },
  }  
});
</script>

<style scoped>
#keys {
  -webkit-appearance: button;
  width: 40px;
  height: 35px;
  margin-left: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 20px skyblue;
  cursor: pointer;
}

#keys:hover {
  background: yellow;
  font-weight: bold;
}

#equal {
  -webkit-appearance: none;
  width: 90px;
  height: 35px;
  margin-left: 10px;
  margin-bottom: 10px;
  box-shadow: 0px 0px 20px skyblue;
  cursor: pointer;
}

</style>