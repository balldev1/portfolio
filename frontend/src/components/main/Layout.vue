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
      <Files size="35" :stroke-width="1" />
    </button>

    <a
      href="https://github.com/balldev1?tab=repositories"
      target="_blank"
      class="tooltip tooltip-right text-stone-500 cursor-pointer hover:text-white"
      data-tip="Linkedin"
    >
      <Github size="35" :stroke-width="1" clip="h-full w-full" />
    </a>
    <a
      href="https://www.linkedin.com/in/nanthawat-cola-6733bb28a/"
      target="_blank"
      class="tooltip tooltip-right text-stone-500 cursor-pointer hover:text-white"
      data-tip="Linkedin"
    >
      <Linkedin size="35" :stroke-width="1" />
    </a>

    <button
      @click="toggleLang"
      class="cursor-pointer tooltip tooltip-right text-stone-500"
      data-tip="Language"
    >
      <Languages size="35" :stroke-width="1" />
    </button>
  </div>
</template>

<script setup>
import { Files, Github, Linkedin, Languages } from "lucide-vue-next";
import { useI18n } from "vue-i18n";

const { t, locale } = useI18n();

const toggleLang = () => {
  locale.value = locale.value === "th" ? "en" : "th";
  localStorage.setItem("language", locale.value);
};

const emit = defineEmits(["toggle-file"]);

const emitToggle = () => {
  emit("toggle-file");
};
</script>
