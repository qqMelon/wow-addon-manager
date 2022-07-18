<script setup lang="ts">
import { onMounted, ref } from 'vue';
const props = defineProps({
  baseURL: {
    type: String,
    default: 'https://api.curseforge.com',
  },
});

const listAddons: any = ref(null);
const init: any = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    'x-api-key': '$2a$10$.J7O6q.tKLTIc2YJUC2eA.A1IL8M6Og.6r5BXDGvw0A2USfJLFrzS',
  },
}

onMounted(() => {
  fetch(`${props.baseURL}/v1/mods/search?gameId=1`, init)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      listAddons.value = data.data;
    })
    .catch(error => {
      console.log(error);
    });
});
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
    <tbody>
      <tr v-for="addon in listAddons">
        <td class="border px-4 py-2">{{ addon.name }}</td>
        <td class="border px-4 py-2">{{ addon.gameVersion }}</td>
        <td class="border px-4 py-2">{{ addon.releaseDate }}</td>
        <td class="border px-4 py-2">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="onGetAddons = !onGetAddons">
            Installer
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>
