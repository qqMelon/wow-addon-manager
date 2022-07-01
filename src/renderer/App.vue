<script setup lang="ts">
import { ipcRenderer } from './electron'
import Navigator from './components/Navigator.vue';

ipcRenderer.send('message', 'Hello from App.vue!');
</script>

<template>
  <div id="app">
    <Navigator />
  </div>
</template>
