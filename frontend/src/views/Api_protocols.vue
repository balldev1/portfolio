<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <Api_protocols />
    </div>
  </div>
</template>

<script setup>
import Api_protocols from "@/components/project/note/Api_protocols.vue";
</script>
