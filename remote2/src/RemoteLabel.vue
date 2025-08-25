<template>
  <div>{{ msg }}</div>
</template>

<script setup lang="ts">
import { greet } from 'shared-lib';

const msg = greet('Remote 2');
</script>

<style scoped>
div { padding: 8px; border: 1px solid #ccc; }
</style>
