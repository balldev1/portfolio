<template>
  <TieredMenu
    toggleablecontent
    :pt="{
      header: { class: ' !border-none !p-0 !pr-2' },
      action: { class: '!pr-2 !text-slate-400 !p-2 ' },
      menucontent: {
        class: '!bg-slate-500/10  !border-none ',
      },
    }"
    class="mypanel text-sm"
    :model="items"
  >
    <template #item="{ item, props, hasSubmenu }">
      <a v-ripple class="flex items-center" v-bind="props.action">
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
        <span
          v-if="item.shortcut"
          class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
          >{{ item.shortcut }}</span
        >
        <i v-if="hasSubmenu" class="pi pi-angle-right ml-auto"></i>
        <ChevronDown v-if="hasSubmenu" size="20" class="ml-auto" />
      </a>
    </template>
  </TieredMenu>
</template>

<script setup>
import TieredMenu from "primevue/panelmenu";
import { ChevronDown } from "lucide-vue-next";

import { ref } from "vue";

const items = ref([
  {
    label: "Explorer port",
    icon: "pi pi-file",
    items: [
      {
        label: "Project",
        icon: "pi pi-plus",
        items: [
          {
            label: "Document",
            icon: "pi pi-file",
          },
          {
            label: "Image",
            icon: "pi pi-image",
          },
          {
            label: "Video",
            icon: "pi pi-video",
          },
        ],
      },
      {
        label: "Open",
        icon: "pi pi-folder-open",
        shortcut: ".",
      },
      {
        label: "Print",
        icon: "pi pi-print",
        shortcut: ".",
      },
    ],
  },
]);
</script>

<style>
.mypanel {
  .p-panelmenu-header-content {
    background: black;
    color: white;
    border: none;
    /* padding: 2px; ✅ เพิ่ม padding ล่าง (8px = 0.5rem) */
    /* border-bottom: 1px solid rgb(46, 51, 46); ✅ เพิ่มบรรทัดนี้ */
    border-radius: 0; /* ✅ ลบความโค้ง */
  }

  .p-panelmenu-header-content:hover {
    background: rgb(55, 48, 48); /* ✅ พื้นหลังเปลี่ยนเป็นแดงเมื่อ hover */
    cursor: pointer;
  }

  .p-menuitem-content {
    font-size: 15px;
  }

  .p-menuitem-content:hover {
    background: rgb(55, 48, 48);
  }
}
</style>
