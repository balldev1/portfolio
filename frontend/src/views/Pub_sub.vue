<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <Pub_sub />
    </div>
  </div>
</template>

<script setup>
import Pub_sub from "@/components/project/note/Pub_sub.vue";
</script>
