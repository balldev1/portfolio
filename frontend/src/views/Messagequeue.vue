<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <Messagequeue />
    </div>
  </div>
</template>

<script setup>
import Messagequeue from "@/components/project/note/Messagequeue.vue";
</script>
