<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <Failover />
    </div>
  </div>
</template>

<script setup>
import Failover from "@/components/project/note/Failover.vue";
</script>
