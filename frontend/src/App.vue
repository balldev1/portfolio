<template>
  <div class="flex">
    <!-- layout sidebar -->
    <Layout @toggle-file="toggleFile" />
    <!-- toggle file -->
    <div
      :class="[
        'transition-all duration-300 ease-in-out overflow-hidden border-r-[1px] border-stone-800 min-h-screen px-4 py-6',
        showFile ? 'ml-20 w-64 opacity-100' : 'w-0 opacity-0',
      ]"
    >
      <div v-if="showFile">explorer port</div>
    </div>
    <!-- RouterView -->
    <div :class="showFile ? 'ml-0 ' : 'ml-15 '">
      <!-- <RouterView /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Layout from "./components/main/Layout.vue";

const showFile = ref(false);

const toggleFile = () => {
  showFile.value = !showFile.value;
};
</script>
