<template>
  <div
    class="fixed flex flex-col items-center gap-6 py-6 px-5 just min-h-screen z-50"
  >
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

    <button
      @click="toggleDark"
      class="cursor-pointer tooltip tooltip-right text-stone-500"
      :data-tip="isDark ? 'Light mode' : 'Dark mode'"
    >
      <Moon size="35" :stroke-width="1" v-if="isDark" />
      <Sun size="35" :stroke-width="1" v-else />
    </button>
  </div>
</template>

<script setup>
import { Files, Github, Linkedin, Languages, Moon, Sun } from "lucide-vue-next";
import { useI18n } from "vue-i18n";
import { ref, onMounted } from "vue";

const emit = defineEmits(["toggle-file"]);
const emitToggle = () => {
  emit("toggle-file");
};

const isDark = ref(false);
const { locale } = useI18n();

const toggleLang = () => {
  locale.value = locale.value === "th" ? "en" : "th";
  localStorage.setItem("language", locale.value);
};

const toggleDark = () => {
  isDark.value = !isDark.value;
  const html = document.documentElement;

  if (isDark.value) {
    html.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark");
    localStorage.setItem("theme", "light");
  }
};

onMounted(() => {
  const savedTheme = localStorage.getItem("theme");
  const html = document.documentElement;

  if (savedTheme === "dark") {
    isDark.value = true;
    html.classList.add("dark");
  } else {
    isDark.value = false;
    html.classList.remove("dark");
  }
});
</script>
