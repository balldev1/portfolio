<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <Springboot />
    </div>
  </div>
</template>

<script setup>
import Springboot from "@/components/project/note/Springboot.vue";
</script>
