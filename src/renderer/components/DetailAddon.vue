<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { XIcon } from '@heroicons/vue/outline'

const props = defineProps({
  addon: {
    type: Object,
    default: () => ({}),
  },
  showPanel: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits([
  'closePanel',
  'onClosePanel'
]);

onMounted(() => {
  console.log('Prouted', props.addon);
});

</script>

<template>
  <TransitionRoot as="template" :show="showPanel">
    <Dialog as="div" class="relative z-10" @close="onClosePanel">
      <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
      </TransitionChild>

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <TransitionChild as="template" enter="transform transition ease-in-out duration-500 sm:duration-700" enter-from="translate-x-full" enter-to="translate-x-0" leave="transform transition ease-in-out duration-500 sm:duration-700" leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel class="pointer-events-auto relative w-screen max-w-md">
                <TransitionChild as="template" enter="ease-in-out duration-500" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-500" leave-from="opacity-100" leave-to="opacity-0">
                  <div class="absolute top-0 left-0 -ml-8 flex pt-4 pr-2 sm:-ml-10 sm:pr-4">
                    <button type="button" class="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white" @click="$emit('closePanel')">
                      <span class="sr-only">Close panel</span>
                      <XIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </TransitionChild>
                <div class="flex h-full flex-col overflow-y-scroll bg-primary-bg py-6 shadow-xl">
                  <div class="flex flex-row items-center px-4 sm:px-6">
                    <img class="h-10 rounded" :src="props.addon.logo.thumbnailUrl" :alt="props.addon.name">
                    <div class="title-container flex flex-col">
                      <DialogTitle class="text-lg font-medium ml-3 text-white"> {{ props.addon.name}} </DialogTitle>
                      <span class="text-md text-white font-light ml-3">By {{ props.addon.authors[0].name }}</span>
                    </div>
                  </div>
                  <div class="px-4 sm:px-6 mt-2">
                    <span v-for="category in props.addon.categories" class="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                      {{ category.name }}
                    </span>
                  </div>
                  <div class="relative mt-6 flex-1 px-4 sm:px-6">
                    <!-- Replace with your content -->
                    <div class="absolute inset-0 px-4 sm:px-6">
                      <div class="h-full border-2 border-dashed border-gray-200" aria-hidden="true" />
                    </div>
                    <!-- /End replace -->
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
