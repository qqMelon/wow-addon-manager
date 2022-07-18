<script setup lang="ts">
import { onMounted, ref } from 'vue';
const props = defineProps({
  baseURL: {
    type: String,
    default: 'https://api.curseforge.com/',
  },
});

const listAddons: any = ref({});
const init: any = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': import.meta.env.VITE_CURSEFORGE_API_KEY,
    Accept: 'application/json',
  },
}
</script>

<template>
  <table class="table-auto w-full">
    <thead>
      <tr>
        <th class="px-4 py-2">Nom</th>
        <th class="px-4 py-2">Version</th>
        <th class="px-4 py-2">Ajouté le</th>
        <th class="px-4 py-2">Actions</th>
      </tr>
    </thead>
  </table>
</template>
