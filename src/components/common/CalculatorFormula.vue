<template>
  <div
    class="calculator-formula text-bold justify-end flex text-lg"
    data-testid="calculator-formula"
  >
    {{ formula }}
  </div>
</template>

<script lang="ts" setup>
defineProps<{
  formula: string;
}>();
</script>

<style lang="scss" scoped>
.calculator-formula {
  color: var(--color-white);
  opacity: 0.5;
  min-height: 1.5rem;
}
</style>
