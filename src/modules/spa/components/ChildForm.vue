<template>
  <form @submit.prevent="submitHandler">
    <label>
      <input v-model="text" type="text" placeholder="ingrese texto">
    </label>
    <button>
      Enviar
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const text = ref('');

const emits = defineEmits(['textSended'])


const submitHandler = () => {

  if (text.value.trim() === '') return
  emits('textSended', text.value)

}

</script>

<style scoped></style>
