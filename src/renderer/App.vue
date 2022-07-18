<script setup lang="ts">
import { ipcRenderer } from './electron'
import Navigator from './components/Navigator.vue';
import Addons from './views/Addons.vue';

ipcRenderer.send('message', 'Hello from App.vue!');
</script>

<template>
  <div id="app">
    <Navigator />
    <Addons />
  </div>
</template>
