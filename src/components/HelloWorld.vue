<template>
  <div id="calculator">
    <form>
      <!-- <input type="text" id="display" enabled /><br /> -->
      <p>{{display}}</p>
      <br />
      <input type="button" value="7" id="keys" @click="handleClick(7)" />
      <input type="button" value="8" id="keys" @click="handleClick(8)" />
      <input type="button" value="9" id="keys" @click="handleClick(9)" />
      <input
        type="button"
        value="-"
        id="keys"
        @click="handleClick('-')"
      /><br />
      <input type="button" value="4" id="keys" @click="handleClick(4)" />
      <input type="button" value="5" id="keys" @click="handleClick(5)" />
      <input type="button" value="6" id="keys" @click="handleClick(6)" />
      <input
        type="button"
        value="*"
        id="keys"
        @click="handleClick('*')"
      /><br />
      <input type="button" value="1" id="keys" @click="handleClick(1)" />
      <input type="button" value="2" id="keys" @click="handleClick(2)" />
      <input type="button" value="3" id="keys" @click="handleClick(3)" />
      <input
        type="button"
        value="/"
        id="keys"
        @click="handleClick('/')"
      /><br />
      <input type="button" value="0" id="keys" @click="handleClick(0)" />
      <input type="button" value="=" id="equal" @click="handleClick('=')" />
      <input type="button" value="+" id="keys" @click="handleClick('.')" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  data() {
    return {
      display: '',
    };
  },
  methods: {
    handleClick(value: any) {
      // boolean to string
      this.display += value;
    },
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#calculator {
  width: 250px;
  height: 350px;
  border: 5px solid black;
  text-align: center;
  background: lightgreen;
  margin: 150px auto;
  box-shadow: 0px 0px 30px gray;
}

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
