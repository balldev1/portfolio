<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <Door />
    </div>
  </div>
</template>

<script setup>
import Door from "@/components/project/single/Door.vue";
</script>
