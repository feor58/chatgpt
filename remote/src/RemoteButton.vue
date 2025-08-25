<template>
  <button @click="increment">{{ msg }} Count: {{ count }}</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { greet } from 'shared-lib';

const count = ref(0);
const msg = greet('Remote');

function increment() {
  count.value++;
}
</script>

<style scoped>
button { padding: 8px; }
</style>
