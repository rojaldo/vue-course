<template>
  <div id="calculator">
    <form>
      
      <display-component :input-display="display"></display-component>
      <br />
      <keyboard-component @on-click="handleClick($event)"></keyboard-component>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import DisplayComponent from "./DisplayComponent.vue";
import KeyboardComponent from "./KeyboardComponent.vue";
import { Calculator } from "../../models/Calculator";

export default Vue.extend({
  components: { DisplayComponent, KeyboardComponent },
  name: 'CalculatorComponent',
  data() {
    return {
      display: "",
      calculatorModel: new Calculator()

    };
  },
  props: {
    propsDisplay: {
      type: String,
    },
    calculatorData: {
      type: Object,
    },
  },
  watch: {

    calculatorData(value: Calculator) {
      this.calculatorModel.setData(value);
      this.display = this.calculatorModel.display;
    },
  },
  methods: {
    handleClick(value: string | number) {
      // boolean to string
      if (typeof value === "string") {
        this.display = this.calculatorModel.handleSymbol(value);
      } else if (typeof value === "number") {
        this.display = this.calculatorModel.handleNumber(value);
      }
      this.$emit("display-changed", this.display);

    },
  },
  beforeDestroy() {
    this.$emit("model-changed", this.calculatorModel.getData());
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

</style>
