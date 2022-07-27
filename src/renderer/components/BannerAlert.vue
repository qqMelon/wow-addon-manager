<!-- This example requires Tailwind CSS v2.0+ -->
<script setup>
import { SpeakerphoneIcon, XIcon } from '@heroicons/vue/outline';

/*
const emit = defineEmits<{
  (event: 'close', value: string): void
}>();
 */
</script>

<template>
  <div class="bg-primary-accent">
    <div class="max-w-7xl mx-auto py-3 px-3 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between flex-wrap">
        <div class="w-0 flex-1 flex items-center">
          <span class="flex p-2 rounded-lg bg-primary-accent-hover">
            <SpeakerphoneIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </span>
          <p class="ml-3 font-medium text-white truncate">
            <span class="md:hidden"> Mettez a jour vos Addons </span>
            <span class="hidden md:inline"> UPDATE ! Certains de vos Addons ne sont pas a jour ! </span>
          </p>
        </div>
        <div class="order-3 mt-2 flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
          <a href="#" class="flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-primary-accent bg-white hover:bg-indigo-50"> Mettre a jour </a>
        </div>
        <div class="order-2 flex-shrink-0 sm:order-3 sm:ml-3">
          <button type="button" class="-mr-1 flex p-2 rounded-md hover:bg-primary-accent-hover focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
            <span class="sr-only">Dismiss</span>
            <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
