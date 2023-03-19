<script setup lang="ts">
import CalculatorView from "components/CalculatorView.vue";
</script>

<template>
  <div class="container">
    <CalculatorView />
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: calc(100% - 2rem);
  margin-left: 1rem;
  margin-right: 1rem;
  display: flex;
  justify-content: center;
  padding: 1rem 0;
}
</style>
