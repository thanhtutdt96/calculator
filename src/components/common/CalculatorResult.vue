<template>
  <div class="calculator-result text-bold justify-end flex" data-testid="calculator-result">
    {{ result }}
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    result: string;
  }>(),
  {
    result: "0",
  },
);
</script>

<style lang="scss" scoped>
.calculator-result {
  font-size: 3rem;
  color: var(--color-white);
  word-break: break-word;
}
</style>
