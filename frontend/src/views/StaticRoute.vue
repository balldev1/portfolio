<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <StaticRoute />
    </div>
  </div>
</template>

<script setup>
import StaticRoute from "@/components/project/note/StaticRoute.vue";
</script>
