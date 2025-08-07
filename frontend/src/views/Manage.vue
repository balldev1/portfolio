<template>
  <div class="flex flex-col">
    <div
      :class="[
        isSidebarOpen ? 'pl-0 ' : '',
        'transition-all duration-300 flex',
      ]"
    >
      <div
        :class="[
          isSidebarOpen ? 'pt-5 ' : 'pt-0',
          'transition-all duration-300 flex',
        ]"
      >
        <!-- <ModalAddNote /> -->
      </div>
    </div>
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300  flex px-10 ',
      ]"
    >
      <Manage />
    </div>
  </div>
</template>

<script setup>
import Manage from "@/components/project/single/Manage.vue";
</script>
