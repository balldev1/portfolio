<template>
  <div class="flex flex-col pt-5">
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
        <ModalAddNote />
      </div>
    </div>
    <div
      :class="[
        isSidebarOpen ? 'pt-10' : 'pt-5 ',
        'transition-all duration-300   flex items-center justify-center ',
      ]"
    >
      <ContentNote />
    </div>
  </div>
</template>

<script setup>
defineProps({
  isSidebarOpen: {
    type: Boolean,
    required: true,
  },
});

import ModalAddNote from "@/components/project/note/ModalAddNote.vue";
import ContentNote from "@/components/project/note/ContentNote.vue";
</script>
