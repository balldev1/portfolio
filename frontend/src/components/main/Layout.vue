<template>
  <div
    class="fixed flex flex-col items-center gap-10 py-6 px-5 just border-r-[1px] min-h-screen border-stone-800"
  >
    <!-- Emit event เมื่อกดไอคอน -->
    <button
      @click="emitToggle"
      class="cursor-pointer tooltip tooltip-right"
      data-tip="Portfolio"
    >
      <Files size="40" :stroke-width="1" />
    </button>

    <div
      class="tooltip tooltip-right text-stone-500 cursor-pointer hover:text-white"
      data-tip="Linkedin"
    >
      <Github size="40" :stroke-width="1" clip="h-full w-full" />
    </div>
    <div
      class="tooltip tooltip-right text-stone-500 cursor-pointer hover:text-white"
      data-tip="Linkedin"
    >
      <Linkedin size="40" :stroke-width="1" />
    </div>
  </div>
</template>

<script setup>
import { Files, Github, Linkedin } from "lucide-vue-next";
const emit = defineEmits(["toggle-file"]);

const emitToggle = () => {
  emit("toggle-file");
};
</script>
