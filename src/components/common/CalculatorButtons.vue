<template>
  <div class="calculator-buttons">
    <CalculatorButton
      v-for="button in calculatorButtons"
      :key="button.value"
      :label="button.label || ''"
      :is-rounded="button.isRounded"
      :is-secondary="button.value === '='"
      :class="{
        'calculator-button--last-item': button.value === '=',
      }"
      :data-testid="`calculator-button-${button.label}`"
      @click="calculatorButtonClickHandler(button.type, button.value)"
    />
  </div>
</template>

<script setup lang="ts">
import { CALCULATOR_BUTTONS as calculatorButtons } from "helpers/constants";
import CalculatorButton from "components/common/CalculatorButton.vue";
import { CalculatorButtonAttribute, CalculatorButtonType } from "types/Calculator";

const emits = defineEmits<{
  (event: "reset"): void;
  (event: "calculate"): void;
  (event: "append-formula", value: Pick<CalculatorButtonAttribute, "type" | "value">): void;
}>();

const calculatorButtonClickHandler = (buttonType: CalculatorButtonType, value: string | number) => {
  if (buttonType === CalculatorButtonType.RESET) {
    emits("reset");

    return;
  }

  if (buttonType === CalculatorButtonType.CALCULATE) {
    emits("calculate");

    return;
  }

  emits("append-formula", { type: buttonType, value });
};
</script>

<style lang="scss" scoped>
.calculator-buttons {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
}
.calculator-button--last-item {
  grid-column: 4 / 5;
}
</style>
