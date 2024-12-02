<template>
  <div class="wrapper">
    <h1>Contador View</h1>
    <ContadorComponent :initial-value="2" />
  </div>
</template>

<script setup>
import ContadorComponent from '../components/ContadorComponent.vue';

</script>


<style scoped>
h1 {
  text-align: center;
  margin: 20px 0;
}

.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
