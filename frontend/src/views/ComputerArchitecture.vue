<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <ComputerArchitecture />
    </div>
  </div>
</template>

<script setup>
import ComputerArchitecture from "@/components/project/note/ComputerArchitecture.vue";
</script>
