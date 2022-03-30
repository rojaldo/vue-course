<template>
  <calculator-component :calculatorData="calculatorData" @model-changed="handleChange($event)"></calculator-component>
</template>

<script lang="ts">
import Vue from "vue";
import CalculatorComponent from "./CalculatorComponent.vue";
import { Wrapper } from "@/store/util";
import {
  mappedGetters,
  mappedActions,
  mappedMutations,
  Actions,
  Getters,
  State,
  mappedState,
} from "@/store/Store";
import { Calculator } from "@/models/Calculator";

export default Vue.extend({
  components: { CalculatorComponent },
  name: "CalculatorContainer",
  data() {
    return {
      ...mappedState,
      ...mappedGetters,
      ...mappedMutations,
      display: "",
      calculatorData: new Calculator(),
    };
  },
  mounted() {
    this.display = this.getDisplay();
    this.calculatorData = this.getCalculatorInfo();
    console.log(this.calculatorData);
    
  },
  methods: {
      handleChange(value: any) {
        // this.display = value;
        // this.setDisplay(value);
        this.setModelCalculator(value);
      },
  }
});
</script>

<style scoped>
</style>