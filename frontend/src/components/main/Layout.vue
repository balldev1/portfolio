<template>
  <div
    class="fixed flex flex-col p-3 py-5 gap-6 border-r-[1px] min-h-screen border-stone-800"
  >
    <!-- Emit event เมื่อกดไอคอน -->
    <div class="tooltip tooltip-right" data-tip="Portfolio" @click="emitToggle">
      <Files size="35" :stroke-width="1" class="cursor-pointer" />
    </div>

    <div class="tooltip tooltip-right" data-tip="Github">
      <Github
        size="35"
        :stroke-width="1"
        class="cursor-pointer text-stone-500 hover:text-white"
      />
    </div>
    <div class="tooltip tooltip-right" data-tip="Linkedin">
      <Linkedin
        size="35"
        :stroke-width="1"
        class="cursor-pointer text-stone-500 hover:text-white"
      />
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
