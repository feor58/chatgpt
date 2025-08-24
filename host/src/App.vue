<template>
  <div>
    <h1>Host App</h1>
    <p>{{ msg }}</p>
    <RemoteButton />
    <RemoteLabel />
  </div>
</template>

<script setup lang="ts">
import RemoteButton from 'remoteApp/RemoteButton';
import RemoteLabel from 'remoteApp2/RemoteLabel';
import { greet } from 'shared-lib';

const msg = greet('Host');
</script>
