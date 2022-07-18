<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import ListAddons from '@/components/ListAddons.vue'
import { ref } from 'vue';

const onGetAddons: boolean = ref(false);
const baseURL: string = 'https://api.curseforge.com';
</script>

<template>
    <header class="bg-gray-800 shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-white">Mes Addons</h1>
        <button class="float-right bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click="onGetAddons = !onGetAddons">
          {{ onGetAddons? 'Mes addons' : 'Ajouter un addon' }}
        </button>
      </div>
    </header>
    <main class="bg-gray-800">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <div v-if="!onGetAddons" class="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          <div v-else>
            <SearchBar />
            <ListAddons :baseURL="baseURL" />
          </div>
        </div>
        <!-- /End replace -->
      </div>
    </main>
</template>
