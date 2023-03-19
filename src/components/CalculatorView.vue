<template>
  <!-- design link: https://www.figma.com/file/RZ1xtgdFBTI0a0p8kKr6l3/Calculator-Task?node-id=0-1&t=NHuZaHipz0ncz5vC-0 -->
  <div class="calculator-view">
    <CalculatorResult :result="displayValue" />

    <CalculatorFormula :formula="formula" class="mt-lg" />

    <CalculatorButtons
      class="mt-xl pt-lg"
      @append-formula="handleAppendFormula"
      @reset="handleReset"
      @calculate="handleCalculate"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import useCalculator from "composables/useCalculator";
import CalculatorButtons from "components/common/CalculatorButtons.vue";
import CalculatorFormula from "components/common/CalculatorFormula.vue";
import CalculatorResult from "components/common/CalculatorResult.vue";

const {
  displayValue,
  formula,
  handleAppendFormula,
  handleCalculate,
  handleKeyboardInput,
  handleReset,
} = useCalculator();

onMounted(() => {
  document.addEventListener("keydown", handleKeyboardInput);
});

onUnmounted(() => {
  document.removeEventListener("keydown", handleKeyboardInput);
});
</script>

<style lang="scss" scoped>
.calculator-view {
  width: 23rem;
  max-width: 100%;
  background: var(--color-dark-grey);
  box-shadow: 0 0.5rem 2rem var(--color-dark-grey);
  padding: 3rem 2rem;
}
</style>
