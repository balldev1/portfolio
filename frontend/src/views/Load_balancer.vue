<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <Load_Balancer />
    </div>
  </div>
</template>

<script setup>
import Load_Balancer from "@/components/project/note/Load_balancer.vue";
</script>
