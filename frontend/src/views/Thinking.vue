<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <Thinking />
    </div>
  </div>
</template>

<script setup>
import Thinking from "@/components/project/note/Thinking.vue";
</script>
