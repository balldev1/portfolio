<template>
  <div
    class="fixed w-full bg-stone-950 p-2 border-b-[1px] border-stone-700 z-50"
  >
    <div class="flex justify-between items-center">
      <div>
        <div className="badge bg-red-400 badge-xs scale-90"></div>
        <div className="badge bg-yellow-400  badge-xs scale-80"></div>
        <div className="badge bg-green-400 badge-xs scale-80"></div>
      </div>
      <div class="flex items-center gap-3">
        <ArrowLeft size="16" />
        <ArrowRight size="16" class="text-stone-600" />
        <div
          class="flex gap-1 items-center justify-center text-[12px] py-1 relative rounded-sm border-[1px] w-96 bg-slate-500/50 dark:bg-slate-500/10 dark:border-stone-700 border-stone-500"
        >
          <Search size="14" />
          {{ t("Portfolio") }}
        </div>
        <div class="flex items-center gap-1">
          <Bot size="18" />
          <Rss size="18" />
        </div>
      </div>
      <div class="flex items-center gap-1">
        <Columns2 size="18" />
        <PanelsRightBottom size="18" />
        <PanelTop size="18" />
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Search,
  ArrowLeft,
  ArrowRight,
  Bot,
  Rss,
  Columns2,
  PanelsRightBottom,
  PanelTop,
} from "lucide-vue-next";

import { useI18n } from "vue-i18n";
const { t } = useI18n();
</script>
