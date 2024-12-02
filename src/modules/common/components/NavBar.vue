<template>
  <nav class="navbar">
    <span class="navbar__element brand">Mufrick01</span>
    <ul class="navbar__element nav-links">
      <li>
        <RouterLink :to="{ name: 'contador' }">
          Contador
        </RouterLink>
      </li>
      <li>
        <RouterLink :to="{ name: 'padre' }">
          Padre e hijo
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';


</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  background-color: #f1f1f1;
  min-height: 40px;
  align-items: center
}

.navbar__element {
  margin: 0 50px;
}

.nav-links {
  display: flex;
  gap: 10px;
  list-style: none;
}

.brand {
  font-weight: 900;
}
</style>
