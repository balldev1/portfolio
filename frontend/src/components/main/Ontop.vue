<template>
  <div class="bg-stone-950 w-full fixed mt-2 border-b-[1px] border-stone-700">
    <div class="flex items-center">
      <div class="border-t-4 border-lime-600">
        <div
          class="border-r-[1px] border-stone-700 p-2 px-5 flex items-center space-x-2"
        >
          <img
            src="https://v2.vuejs.org/images/logo.svg"
            alt="Vue Logo"
            class="w-4 h-4"
          />
          <span class="first-letter:uppercase">
            {{
              route.path.replace("/", "")
                ? route.path.replace("/", "") + ".vue"
                : "Explorer.vue"
            }}
          </span>
          <X size="15" :stroke-width="1" class="mt-1" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRoute } from "vue-router"; // ✅ useRoute ไม่ใช่ useParama
import { X } from "lucide-vue-next";

const route = useRoute(); // ✅ ต้องเรียก useRoute()
</script>
