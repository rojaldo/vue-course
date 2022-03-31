<template>
  <div>
    <input type="button" value="7" class="keys" id="keys_0" @click="handleClick(7)" />
    <input type="button" value="8" class="keys" id="keys_1" @click="handleClick(8)" />
    <input type="button" value="9" class="keys" id="keys_2" @click="handleClick(9)" />
    <input type="button" value="-" class="keys" id="keys_3" @click="handleClick('-')" />
    <br />
    <input type="button" value="4" class="keys" id="keys_4" @click="handleClick(4)" />
    <input type="button" value="5" class="keys" id="keys_5" @click="handleClick(5)" />
    <input type="button" value="6" class="keys" id="keys_6" @click="handleClick(6)" />
    <input type="button" value="*" class="keys" id="keys_7" @click="handleClick('*')" />
    <br />
    <input type="button" value="1" class="keys" id="keys_8" @click="handleClick(1)" />
    <input type="button" value="2" class="keys" id="keys_9" @click="handleClick(2)" />
    <input type="button" value="3" class="keys" id="keys_10" @click="handleClick(3)" />
    <input type="button" value="/" class="keys" id="keys_11" @click="handleClick('/')" />
    <br />
    <input type="button" value="0" class="keys" id="keys_12" @click="handleClick(0)" />
    <input type="button" value="=" class="keys" id="equal" @click="handleClick('=')" />
    <input type="button" value="+" class="keys" id="keys" @click="handleClick('+')" />
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
.keys {
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