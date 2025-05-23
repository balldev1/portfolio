<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <SeoNext />
    </div>
  </div>
</template>

<script setup>
import SeoNext from "@/components/project/note/SeoNext.vue";
</script>
