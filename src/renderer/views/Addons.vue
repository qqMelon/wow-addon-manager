<script setup lang="ts">
import SearchBar from '@/components/SearchBar.vue'
import ListAddons from '@/components/ListAddons.vue'
import AppButton from '@/components/AppButton.vue'
import { ref } from 'vue';

const onGetAddons: boolean = ref(false);
const baseURL: string = 'https://api.curseforge.com';
</script>

<template>
    <header class="bg-primary-light-bg hadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-white">Mes Addons</h1>
        <AppButton @click="onGetAddons = !onGetAddons">
          <slot>
            {{ onGetAddons? 'Mes addons' : 'Ajouter un addon' }}
          </slot>
        </AppButton>
      </div>
    </header>
    <main class="main-container bg-primary-light-bg">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <div v-if="!onGetAddons" class="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          <div v-else>
            <!-- <SearchBar /> -->
            <ListAddons :baseURL="baseURL" />
          </div>
        </div>
      </div>
    </main>
</template>
