<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <Network />
    </div>
  </div>
</template>

<script setup>
import Network from "@/components/project/note/Network.vue";
</script>
