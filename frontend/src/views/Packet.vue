<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <Packet />
    </div>
  </div>
</template>

<script setup>
import Packet from "@/components/project/note/Packet.vue";
</script>
