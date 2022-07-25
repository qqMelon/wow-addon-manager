<script setup lang="ts">
import AppLoader from '@/components/AppLoader.vue';
import AppButton from '@/components/AppButton.vue';
import { DownloadIcon, XIcon } from '@heroicons/vue/outline';
import { onMounted, ref } from 'vue';

const props = defineProps({
  baseURL: {
    type: String,
    default: 'https://api.curseforge.com',
  },
});

const loading: boolean = ref(true);

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
      loading.value = false;
      listAddons.value = data.data;
    })
    .catch(error => {
      console.log(error);
    });
});
</script>

<template>
  <AppLoader v-if="loading" />
  <table v-else class="table table-list-addon rounded-lg table-auto w-full bg-primary-bg">
    <thead class="bg-primary-bg drop-shadow-lg">
      <tr>
        <th class="text-white text-xl float-left px-4 py-2">Addon</th>
        <th class="text-white text-xl px-4 py-2">Version</th>
        <th class="text-white text-xl px-4 py-2">Auteur</th>
        <th class="text-white text-xl px-4 py-2">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="addon in listAddons" class="item-table">
        <td class="item-row text-white px-4 py-2">
          <span>{{ addon.name }}</span>
          <span class="text-sm font-thin font-light">{{ addon.categories[0].name }}</span>
        </td>
        <td class="item-row text-white font-thin px-4 py-2">{{ addon.latestFiles[0]?.gameVersions[0] }}</td>
        <td class="item-row text-white px-4 py-2">{{ addon.authors[0].name }}</td>
        <td class="item-row px-4 py-2">
          <AppButton @click="">
            <slot>
              <DownloadIcon class="h-4 w-4" aria-hidden="true" />
              <span class="text-sm font-light">Installer</span>
            </slot>
          </AppButton>
        </td>
      </tr>
    </tbody>
  </table>
</template>
