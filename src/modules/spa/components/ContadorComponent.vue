<template>
  <div>
    <button @click="counterStore.increment">+1</button>
    <span>Value: {{ counterStore.count }}</span>
    <button @click="counterStore.decrement">-1</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
const counterStore = useCounterStore();
</script>

<style scoped>
span {
  margin: 0 20px;
}

button {
  padding: 10px;
}
</style>
