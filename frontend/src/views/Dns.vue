<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <Dns />
    </div>
  </div>
</template>

<script setup>
import Dns from "@/components/project/note/Dns.vue";
</script>
