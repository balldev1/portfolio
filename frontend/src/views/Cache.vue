<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <Cache />
    </div>
  </div>
</template>

<script setup>
import Cache from "@/components/project/note/Cache.vue";
</script>
