<template>
  <div class="wrapper">
    <h1>Padre e Hijo View</h1>
    <ParentComponent />
  </div>

</template>

<script setup>
import ParentComponent from '../components/ParentComponent.vue';


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
