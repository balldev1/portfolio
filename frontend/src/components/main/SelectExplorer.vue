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
      <a
        @click.prevent="handleClick(item)"
        v-ripple
        class="flex items-center"
        v-bind="props.action"
      >
        <span :class="item.icon" />
        <span class="ml-2">{{ item.label }}</span>
        <Badge v-if="item.badge" class="ml-auto" :value="item.badge" />
        <span
          v-if="item.shortcut"
          class="ml-auto border border-surface rounded bg-emphasis text-muted-color text-xs p-1"
          >{{ item.shortcut }}</span
        >
        <ChevronDown v-if="hasSubmenu" size="20" class="ml-auto" />
      </a>
    </template>
  </TieredMenu>
</template>

<script setup>
import TieredMenu from "primevue/panelmenu";
import { ChevronDown } from "lucide-vue-next";
import { useRouter } from "vue-router";
import { useI18n } from "vue-i18n";
import { computed } from "vue";
const { t } = useI18n();

const router = useRouter();

const handleClick = (item) => {
  if (item.route) {
    router.push(item.route);
  }
};

const items = computed(() => [
  {
    label: t("Explorer"),
    icon: "pi pi-folder-open",
    items: [
      {
        label: t("Home"),
        icon: "pi pi-share-alt",
        shortcut: "now",
        route: "/",
      },
      {
        label: "Contact",
        icon: "pi pi-share-alt",
        shortcut: `now`,
        route: "/contact",
      },
      {
        label: t("Project"),
        icon: "pi pi-discord",
        items: null,
        lazy: true,
        items: [
          {
            label: t("currency"),
            icon: "pi pi-twitch",
            route: "/currency",
          },
          {
            label: t("Note"),
            icon: "pi pi-twitch",
            route: "/note",
          },
          {
            label: "Video",
            icon: "pi pi-twitch",
          },
        ],
      },
      {
        label: t("Note"),
        icon: "pi pi-hashtag",
        items: [
          {
            label: "Document",
            icon: "pi pi-code",
          },
          {
            label: "Image",
            icon: "pi pi-code",
          },
          {
            label: "Video",
            icon: "pi pi-code ",
          },
        ],
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
