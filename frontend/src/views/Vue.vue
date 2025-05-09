<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <Vue />
    </div>
  </div>
</template>

<script setup>
import Vue from "@/components/project/note/Vue.vue";
</script>
