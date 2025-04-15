<template>
  <div class="flex">
    <!-- layout sidebar -->
    <Layout @toggle-file="toggleFile" />
    <!-- toggle file -->
    <div
      v-if="showFile"
      class="min-h-screen ml-15 px-4 py-6 border-r-[1px] border-stone-800"
    >
      explorer port
    </div>
    <!-- RouterView -->
    <div :class="showFile ? 'ml-0 bg-rose-200' : 'ml-15 '">
      <!-- <RouterView /> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Layout from "./components/main/Layout.vue";

// toggle state
const showFile = ref(false);

// toggle function
const toggleFile = () => {
  showFile.value = !showFile.value;
};
</script>
