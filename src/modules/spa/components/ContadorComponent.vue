<template>
  <div>
    <button @click="counterStore.increment">+1</button>
    <span>Value: {{ counterStore.count }}</span>
    <button @click="counterStore.decrement">-1</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter';
import { onMounted } from 'vue';
const counterStore = useCounterStore();

const props = defineProps({
  initialValue: {
    type: Number,
    default: 0
  }
})

onMounted(() => {

  if (counterStore.wasInitializedWithInitialValue) return;
  counterStore.InitializeWithValue(props.initialValue)
})
</script>

<style scoped>
span {
  margin: 0 20px;
}

button {
  padding: 10px;
}
</style>
