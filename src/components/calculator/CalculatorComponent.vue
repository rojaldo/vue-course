<template>
  <div id="calculator">
    <form>
      <input type="text" id="display" :value="display" enabled /><br />
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
      <input type="button" value="+" id="keys" @click="handleClick('+')" />
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

enum State {
  INIT,
  FIRSTFIGURE,
  SECONDFIGURE,
  RESULT,
}

export default Vue.extend({
  name: 'CalculatorComponent',
  data() {
    return {
      display: "",
      result: 0,
      operator: "",
      firstNumber: 0,
      secondNumber: 0,
      currentState: State.INIT,
    };
  },
  methods: {
    handleClick(value: string | number) {
      // boolean to string
      if (typeof value === "string") {
        this.handleSymbol(value);
      } else if (typeof value === "number") {
        this.handleNumber(value);
      }
    },
    handleNumber(value: number) {
      switch (this.currentState) {
        case State.INIT:
          this.firstNumber = value;
          this.currentState = State.FIRSTFIGURE;
          this.display += value;
          break;
        case State.FIRSTFIGURE:
          this.firstNumber = this.firstNumber * 10 + value;
          this.display += value;
          break;
        case State.SECONDFIGURE:
          this.secondNumber = this.secondNumber * 10 + value;
          this.display += value;
          break;
        case State.RESULT:
          this.firstNumber = value;
          this.secondNumber = 0;
          this.operator = '';
          this.result = 0;
          this.currentState = State.FIRSTFIGURE;
          this.display = value.toString();
          break;
        default:
          break;
      }
    },
    calculate(): number {
      switch (this.operator) {
        case "+":
          return this.firstNumber + this.secondNumber;
        case "-":
          return this.firstNumber - this.secondNumber;
        case "*":
          return this.firstNumber * this.secondNumber;
        case "/":
          return this.firstNumber / this.secondNumber;
        default:
          return 0;
      }
    },
    handleSymbol(value: string) {
      switch (this.currentState) {
        case State.INIT:
          break;
        case State.FIRSTFIGURE:
          if(value === '+' || value === '-' || value === '*' || value === '/') {
            this.operator = value;
            this.currentState = State.SECONDFIGURE;
            this.display += value;
          } 
          break;
        case State.SECONDFIGURE:
          if(value === '=') {
            this.result = this.calculate();
            this.currentState = State.RESULT;
            this.display += value + this.result;
          }
          break;
        case State.RESULT:
          if(value === '+' || value === '-' || value === '*' || value === '/') {
            this.firstNumber = this.result;
            this.secondNumber = 0;
            this.operator = value;
            this.result = 0;
            this.currentState = State.SECONDFIGURE;
            this.display = this.firstNumber + value;
          }
          break;
        default:
          break;
      }
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
