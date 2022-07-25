<script setup lang="ts">
</script>

<template>
  <button class="float-right bg-primary-accent hover:bg-primary-accent-hover text-white font-bold py-2 px-4 rounded-full" @click="onGetAddons = !onGetAddons">
    <slot>
      {{ text }}
    </slot>
  </button>
</template>
