<template>
  <div class="w-screen h-full">
    <!-- header -->
    <Header />
    <!-- sidebar -->
    <div class="flex pt-8">
      <Layout @toggle-file="toggleFile" />
      <div
        :class="[
          'transition-all duration-300 ease-in-out overflow-hidden border-l-[1px] border-stone-700 min-h-screen px-4 py-6',
          showFile ? 'ml-20 w-64 opacity-100' : 'w-0 opacity-0',
        ]"
      >
        <div v-if="showFile">
          explorer port
          <p>{{ t("hello") }}</p>
        </div>
      </div>
      <!-- RouterView_body -->
      <div
        :class="[
          'mt-0 w-full border-l-[1px] border-stone-700 bg-slate-500/10',
          showFile ? 'ml-0' : 'ml-11',
        ]"
      >
        <div class="p-5 mt-5"><RouterView /></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import Layout from "./components/main/Layout.vue";
import Header from "./components/main/Header.vue";

import { useI18n } from "vue-i18n";

const { t } = useI18n();

const showFile = ref(true);

const toggleFile = () => {
  showFile.value = !showFile.value;
};
</script>
