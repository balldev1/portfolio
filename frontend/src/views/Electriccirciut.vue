<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <Electriccirciut />
    </div>
  </div>
</template>

<script setup>
import Electriccirciut from "@/components/project/note/Electriccirciut.vue";
</script>
