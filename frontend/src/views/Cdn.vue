<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <Cdn />
    </div>
  </div>
</template>

<script setup>
import Cdn from "@/components/project/note/Cdn.vue";
</script>
