<template>
  <div class="w-screen h-full">
    <!-- header -->
    <Header />

    <!-- layout -->
    <div class="flex pt-8">
      <!-- sidebar -->
      <Layout @toggle-file="toggleFile" />

      <!-- explorer sidebar -->
      <div
        :class="[
          'transition-all  duration-300 ease-in-out overflow-hidden border-l border-stone-700 min-h-screen px-4 py-6',
          showFile ? 'ml-18   w-70 opacity-100' : 'w-0 opacity-0',
        ]"
      >
        <div v-if="showFile" class="">
          <SelectExplorer />
        </div>
      </div>

      <!-- main content area -->
      <div
        :class="[
          'relative transition-all duration-500 ease-in-out mt-0 w-full border-l border-stone-700 bg-slate-500/50 dark:bg-slate-500/10',
          showFile ? 'ml-0' : 'ml-11',
        ]"
      >
        <Ontop @toggle-ontop="toggleFile" />

        <!-- transition RouterView in/out -->
        <div
          class="mt-14 transform transition-all duration-500 ease-in-out"
          :class="
            showFile ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-80'
          "
        >
          <RouterView />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import Layout from "./components/layout/Layout.vue";
import Header from "./components/layout/Header.vue";
import Ontop from "./components/layout/Ontop.vue";
import SelectExplorer from "./components/layout/SidebarSelectExplorer.vue";

const { t } = useI18n();

const showFile = ref(true);

const toggleFile = () => {
  showFile.value = !showFile.value;
};
</script>
