<template>
  <button
    class="text-md flex justify-center items-center"
    :class="{
      'calculator-button--rounded': isRounded,
      'calculator-button--secondary': isSecondary,
    }"
  >
    {{ label }}
  </button>
</template>

<script setup lang="ts">
defineProps<{
  isRounded?: boolean;
  isSecondary?: boolean;
  label: string;
}>();
</script>

<style lang="scss" scoped>
@import "src/styles/variable";

button {
  width: 4rem;
  height: 4rem;
  color: var(--color-semi-white);
  background-color: transparent;
  border: none;
  cursor: pointer;
  line-height: 1;
  border-radius: 2rem;

  &:hover {
    background-color: rgba(#c9c9c9, 0.25);
    box-shadow: 0px 0.25rem 0.25rem rgba($white, 0.25);
  }

  &:active {
    background: rgba($black, 0.25);
    box-shadow: none;
  }

  &.calculator-button--rounded {
    color: var(--color-semi-black);
    background-color: var(--color-primary);

    &:hover {
      background-color: #f5f5f5;
    }

    &:active {
      background: #989898;
    }
  }

  &.calculator-button--secondary {
    color: var(--color-semi-white);
    background-color: var(--color-secondary);

    &:hover {
      background-color: #6440f1;
      box-shadow: 0px 0.25rem 0.25rem rgba($secondary, 0.25);
    }

    &:active {
      background-color: #2f0cb9;
      box-shadow: none;
    }
  }
}
</style>
