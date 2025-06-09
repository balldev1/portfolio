<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <Trunk />
    </div>
  </div>
</template>

<script setup>
import Trunk from "@/components/project/note/Trunk.vue";
</script>
