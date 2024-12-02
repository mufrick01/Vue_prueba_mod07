<template>
  <div>
    <ChildForm @text-sended="textSendedHandler" />
    <p>{{ text }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import ChildForm from './ChildForm.vue';

const text = ref('Aquí iría el texto que se recibe desde el hijo')

const textSendedHandler = (textValue) => {
  text.value = textValue
}
</script>

<style scoped></style>
