<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <Basic />
    </div>
  </div>
</template>

<script setup>
import Basic from "@/components/project/note/Basic.vue";
</script>
