<script setup lang="ts">
import ListAddons from '@/components/ListAddons.vue';
import AppButton from '@/components/AppButton.vue';
import AppInput from '@/components/AppInputs/AppInput.vue';
import AppInputSelect from '@/components/AppInputs/AppInputSelect.vue';
import { ref } from 'vue';

const onGetAddons: boolean = ref(false);
const baseURL: string = 'https://api.curseforge.com';

interface Categories {
  categoryName: string
}

const categories: Array<Categories> = [
  'All Categories',
  'Achievements',
  'Action Bars',
  'Alchemy',
  'Archaology',
  'Arena',
  'Artworks',
  'Auction & Economy',
  'Audio & Video',
  'Bags & Inventory',
  'Battle pets',
  'Battleground',
  'Blacksmithing',
  'Boss Encounter',
  'Buffs & Debuffs',
  'Caster',
  'Chat & Communication',
  'Class',
  'Combat',
  'Companions',
  'Coocking',
  'Damage dealer',
  'Data broker',
  'Data export',
  'Death knight',
  'Demon hunters',
  'Development tools',
  'Druid',
  'Enchanting',
  'Engineering',
  'First aid',
  'Fishing',
  'FuBar',
  'Garrison',
  'Guild',
  'Healer',
  'Herbalism',
  'HUDs',
  'Hunters',
  'Inscription',
  'Jewelcrafting',
  'Leatherworking',
  'Librairies',
  'Mage',
  'Mail',
  'Map & Minimap',
  'Minigame',
  'Mining',
  'Miscellaneous',
  'Monk',
  'Paladin',
  'Plugin',
  'Priest',
  'Profession',
  'PVP',
  'Quests & Leveling',
  'Raid frame',
  'Rogue',
  'Roleplay',
  'Shaman',
  'Skinning',
  'Tailoring',
  'Tank',
  'Titan panel',
  'Tooltip',
  'Transmogrification',
  'Twitch interaction',
  'Unit frames',
  'Warlock',
  'Warrior'
];
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
        <div class="px-4 py-6 sm:px-0">
          <div v-if="!onGetAddons" class="border-4 border-dashed border-gray-200 rounded-lg h-96" />
          <div v-else class="list-addon-container">
            <div class="flex header-list-addon my-3">
              <AppInput label="Rechercher" />
              <AppInputSelect label="Categories" :listSelect="categories" />
              <AppInputSelect label="Version" :listSelect="['9.2.5', 'All versions']" />
            </div>
            <ListAddons :baseURL="baseURL" />
          </div>
        </div>
      </div>
    </main>
</template>
